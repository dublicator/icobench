// https://icobench.com/developers
import axios from "axios";
import * as crypto from "crypto";
import {
    IIcoBenchFilterParams,
    IIcoBenchFilters,
    IIcoBenchIco,
    IIcoBenchProfile,
    IIcoBenchResponse,
} from "./models/ico";
import { IIcoBenchPeopleFilter, IIcoBenchPeopleResponse, IIcoBenchPerson } from "./models/people";
import { IIcoBenchStats } from "./models/stats";

export class IcoBench {
    private apiHost = "https://icobench.com/api/v1";
    private axiosApiRequest = axios.create({
        baseURL: this.apiHost,
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "X-ICObench-Key": this.publicKey,
        },
    });

    constructor(private publicKey: string, private privateKey: string) {
    }

    /**
     * Returns up to 12 ICOs per page with the amount of pages based on the search
     * criteria and the filters provided. The response provides some basic information about the ICOs.
     */
    public async all(params: IIcoBenchFilterParams = {}): Promise<IIcoBenchResponse> {
        const url = `/icos/all`;
        const data: IIcoBenchResponse = await this.request(url, params);
        return data;
    }

    /**
     * returns up to 8 ICOs that are currently "Hot and Trending" on ICObench.
     */
    public async trending(): Promise<IIcoBenchResponse> {
        const url = `/icos/trending`;
        const data: IIcoBenchResponse = await this.request(url);
        return data;
    }

    /**
     * Returns all available filters.
     */
    public async filters(): Promise<IIcoBenchFilters> {
        const url = "/icos/filters";
        const data: IIcoBenchFilters = await this.request(url);
        return data;
    }

    /**
     * Returns all ICOs that have received rating for either ICO profile or by experts along with their URLs and logos.
     */
    public async ratings(): Promise<IIcoBenchResponse> {
        const url = "/icos/ratings";
        const data: IIcoBenchResponse = await this.request(url);
        return data;
    }

    /**
     * Returns detailed information on the ICO.
     * @param ico Output the ICO with certain ID or URL.
     */
    public async profile(ico: string|number): Promise<IIcoBenchProfile> {
        const url = `/ico/${ico}`;
        const data: IIcoBenchProfile = await this.request(url);
        return data;
    }

    /**
     * Returns up to 12 people per page with the amount of pages based
     * on the search criteria and the filters provided. The response provides some basic information about the person.
     */
    public async people(
        filter: "all"|"expert"|"registered" = "all",
        params: IIcoBenchPeopleFilter = {})
    : Promise<IIcoBenchPeopleResponse> {
        const url = `/people/${filter}`;
        const data: IIcoBenchPeopleResponse = await this.request(url, params);
        return data;
    }

    /**
     * Returns short and interesting statistics about ICObench.
     */
    public async stats(): Promise<IIcoBenchStats> {
        const url = `/other/stats`;
        const data: IIcoBenchStats = await this.request(url);
        return data;
    }

    private async request(url: string, params = {}) {
        const response = await this.axiosApiRequest.post(url, params, {
            headers: {
                "X-ICObench-Sig": this.sign(params),
            },
        });
        return response.data;
    }

    private sign(data = {}): string {
        const hash = crypto.createHmac("sha384", this.privateKey);
        hash.update(JSON.stringify(data));
        return hash.digest("base64");
    }
}
