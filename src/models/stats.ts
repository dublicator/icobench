export interface IIcoBenchStats {
    /**
     * Top 5 countries by the number of ICOs run under their jurisdiction.
     */
    countriesByIcos: Array<{
        /**
         * The name of the country.
         */
        country: string;
        /**
         * The number of ICOs located in a certain country.
         */
        count: number;
    }>;
    /**
     * Top 5 countries by the number of ICOs per million people.
     * Only the countries with more ICOs than the ratio are considered.
     */
    countriesByIcosPerMillion: Array<{
        /**
         * The name of the country.
         */
        country: string;
        /**
         * The number of ICOs located in a certain country per million people.
         */
        count: number;
    }>;
    /**
     * Top 5 ICOs by the value of tokens sold during the ICO.
     */
    topRaised: Array<{
        /**
         * The ICO ID.
         */
        id: number;
        /**
         * The ICO name.
         */
        name: string;
        /**
         * The URL for the ICObench page on which you can find the ICO.
         */
        url: string;
        /**
         * The value of the tokens raised in the ICO in USD.
         */
        raised: number;
    }>;
    /**
     * The total number of all ICOs published on ICObench.
     */
    icos: number;
    /**
     * The number of team members registered at ICObench.
     */
    members: number;
    /**
     * Top 5 registered users by their ICO Success Score.
     */
    topIss: Array<{
        /**
         * The user's ICO Success Score.
         */
        iss: number;
        /**
         * The user's name.
         */
        name: string;
    }>;
}
