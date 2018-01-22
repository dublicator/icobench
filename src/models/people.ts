
export interface IIcoBenchPerson {
    /**
     * The The ID of the member - 0 means person is not registered on ICObench.
     */
    id: number;
    /**
     * A short title of the person.
     */
    title: string;
    /**
     * The person's name.
     */
    name: string;
    /**
     * The ICO Success Score of the person.
     */
    iss: number;
    /**
     * Number (1 or 0) indicates if person is expert on ICObench or not.
     */
    expert: number;
    /**
     * The URL for the ICObench page on which you can find the person.
     */
    url: string;
    /**
     * The URL for the ICObench page on which you can find the square photo of the person.
     */
    photo: string;
    /**
     * The list of ICOs person is part of.
     */
    icos: Array<{
        /**
         * The ICO's ID.
         */
        id: number;
        /**
         * The ICO's name.
         */
        name: string;
    }>;
}

export interface IIcoBenchPeopleResponse {
    /**
     * The total number of people available on ICObench based on search criteria.
     * Please keep in mind that you can get only 12 people per page.
     */
    people: number;
    /**
     * The number of pages available for a particular search criteria.
     */
    pages: number;
    /**
     * The number of the page the API is currently returning results from.
     */
    currentPage: number;
    /**
     * The list of people for a particular search criteria.
     */
    results: IIcoBenchPerson[];
}

export interface IIcoBenchPeopleFilter {
    /**
     * Put the list of people in order by name, iss or number of icos descendingly.
     */
    orderDesc?: PeopleOrder;
    /**
     * Put the list of people in order by name, iss or number of icos ascendingly.
     */
    orderAsc?: PeopleOrder;
    /**
     * List the people from a certain page of your search query.
     */
    page?: number;
    /**
     * List the people those have a certain string in the name.
     */
    search?: string;
}

export type PeopleOrder = "name"|"iss"|"icos";
