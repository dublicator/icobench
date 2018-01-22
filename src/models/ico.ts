export interface IIcoBenchResponse {
    /**
     * The total number of ICOs available on ICObench based on search criteria.
     * Please keep in mind that you can get only 12 ICOs per page.
     */
    icos?: number;
    /**
     * The number of pages available for a particular search criteria.
     */
    pages?: number;
    /**
     * The number of the page the API is currently returning results from.
     */
    currentPage?: number;
    /**
     * The list of ICOs for a particular search criteria.
     */
    results: IIcoBenchIco[];
}

export interface IIcoBenchIco {
    /**
     * The The ID of the ICO.
     */
    id: number;
    /**
     * The The ICO name.
     */
    name: string;
    /**
     * The URL for the ICObench page on which you can find the ICO.
     */
    url: string;
    /**
     * The URL for the ICObench page on which you can find the square logo of the ICO.
     */
    logo: string;
    /**
     * A short description of the ICO (max. 155 characters).
     */
    desc?: string;
    /**
     * The The ICO rating.
     */
    rating: number;
    /**
     * Returns "1" if the ICO listing is premium (currently advertising on ICObench)
     * and "0" if the ICO listing is regular.
     */
    premium?: number;
    raised?: number;
    /**
     * The Pre-ICO and the ICO start and end dates.
     */
    dates?: {
        /**
         * The PreICO start date.
         */
        preIcoStart: string;
        /**
         * The Pre-ICO end date.
         */
        preIcoEnd: string;
        /**
         * The ICO start date.
         */
        icoStart: string;
        /**
         * The ICO end date.
         */
        icoEnd: string;
    };
}

export interface IIcoBenchFilters {
    /**
     * The list of all available categories.
     */
    categories: Array<{
        /**
         * The category ID.
         */
        id: number;
        /**
         * The category name.
         */
        name: string;
    }>;
    /**
     * The list of all available platforms.
     */
    platforms: Array<{
        /**
         * The platform name.
         */
        name: string;
    }>;
    /**
     * The list of all accepted payment methods available.
     */
    accepting: Array<{
        /**
         * The accepted payment method name.
         */
        name: string;
    }>;
    /**
     * The list of all available trading exchanges.
     */
    trading: Array<{
        /**
         * The trading exchange name.
         */
        name: string;
    }>;
    /**
     * The list of all available countries.
     */
    countries: Array<{
        /**
         * The country name.
         */
        name: string;
    }>;
}

export type Order = "rating"|"start"|"end"|"raised"|"name";
export type Status = "active"|"ongoing"|"upcoming"|"ended";

export interface IIcoBenchFilterParams {
    /**
     * Put the list of ICOs in order by rating, start, end, raised or name descendingly.
     */
    orderDesc?: Order;
    /**
     * Put the list of ICOs in order by rating, start, end, raised or name ascendingly.
     */
    orderAsc?: Order;
    /**
     * List the ICOs from a certain page of your search query.
     */
    page?: number;
    /**
     * List the ICOs from a certain category, e.g. "1" (Internet).
     */
    category?: number;
    /**
     * List the ICOs supported by a certain platform, e.g. "Ethereum".
     */
    platform?: string;
    /**
     * List the ICOs those are accepting a certain currency, e.g. "BTC".
     */
    accepting?: string;
    /**
     * List the ICOs listed on a certain exchange, e.g. "Poloniex".
     */
    exchange?: string;
    /**
     * List the ICOs located in a certain country, e.g. "Australia" or "UK".
     */
    country?: string;
    /**
     * List the ICOs those are either active (not ended), ongoing, upcoming or ended.
     */
    status?: Status;
    /**
     * List the ICOs those have a certain string in the name, token name, tagline or
     * short description, e.g. "VIB" or "gaming".
     */
    search?: string;
}

export interface IIcoBenchProfile {
    /**
     * The ID of the ICO.
     */
    id: number;
    /**
     * The ICO name.
     */
    name: string;
    /**
     * The ICO rating.
     */
    rating: number;
    /**
     * The team rating.
     */
    ratingTeam: number;
    /**
     * The vision rating.
     */
    ratingVision: number;
    /**
     * The product rating.
     */
    ratingProduct: number;
    /**
     * The profile rating (only by Benchy).
     */
    ratingProfile: number;
    /**
     * The URL for the ICObench page on which you can find the ICO.
     */
    url: string;
    /**
     * A short tagline for the ICO (max. 50 characters).
     */
    tagline: string;
    /**
     * A short introduction to the ICO.
     */
    intro: string;
    /**
     * A highly informative text about the ICO (can include HTML tags).
     */
    about: string;
    /**
     * The URL for the ICObench page on which you can find the square logo of the ICO.
     */
    logo: string;
    /**
     * The country in which the ICO operates or is located.
     */
    country: string;
    /**
     * Important notification from ICObench editors.
     */
    notification: string;
    /**
     * Registration type in ICO - options: unknown, none, kyc, whitelist, kyc and whitelist.
     */
    registration: string;
    /**
     * List of countries that are not allowed to participate in the ICO.
     * restrictions[x].country	string	Name of the restricted country.
     */
    restrictions: Array<{
        /**
         * Name of the restricted country.
         */
        country: string;
    }>;
    /**
     * The list of milestones or the project roadmap.
     */
    milestones: Array<{
        /**
         * The milestone's title.
         */
        title: string;
        /**
         * The milestone's description.
         */
        content: string;
    }>;
    /**
     * A short description of the ICO team.
     */
    teamIntro: string;
    /**
     * Popular social media and resources links.
     */
    links: {
        /**
         * The link to Twitter.
         */
        twitter: string;
        /**
         * The link to Slack.
         */
        slack: string;
        /**
         * The link to Telegram.
         */
        telegram: string;
        /**
         * The link to Facebook.
         */
        facebook: string;
        /**
         * The link to Medium.
         */
        medium: string;
        /**
         * he link to Bitcointalk forum announcement thread.
         */
        bitcointalk: string;
        /**
         * The link to GitHub.
         */
        github: string;
        /**
         * The link to Reddit.
         */
        reddit: string;
        /**
         * The link to Discord.
         */
        discord: string;
        youtube: string
        /**
         * The link to a video presentation on YouTube, Vimeo or any other website that enables embedded videos.
         */
        video?: string;
        /**
         * The link to the ICO website.
         */
        www: string;
        /**
         * The link to the whitepaper.
         */
        whitepaper: string;
        bounty: string;
    };
    /**
     * Important financial information.
     */
    finance: {
        /**
         * The token ticker.
         */
        token: string;
        /**
         * Price of the token during the ICO. The price can be expressed
         * in different ways, e.g. "1 VIB = 0.1 USD" or "1 ETH = 4,000 TIX".
         */
        price: string;
        /**
         * "true" if there is bonus available and "false" if there is no information on bonus.
         */
        bonus: boolean;
        /**
         * The number of tokens available for sale (not the same as all tokens available).
         */
        tokens: number;
        /**
         * The type of the token, e.g. "ERC20".
         */
        tokentype: string;
        /**
         * The ICO hardcap. The hardcap can be expressed in different ways, e.g. "12,000,000 USD" or "40,0000,000 TIX".
         */
        hardcap: string;
        /**
         * The ICO softcap. The softcap can be expressed in different ways, e.g. "12,000,000 USD" or "40,0000,000 TIX".
         */
        softcap: string;
        /**
         * The value of the tokens raised in the ICO in USD.
         */
        raised: number;
        /**
         * The platform on which the ICO is running, e.g. "Ethereum" or "Waves".
         */
        platform: string;
        /**
         * The percentage of total number of tokens that is distributed in the ICO, e.g. "50%".
         */
        distributed: string;
        /**
         * The minimum required contribution to participate on token sale, e.g. "0.01 ETH" or "10 USD".
         */
        minimum: string;
        /**
         * The list of the currencies accepted during the token sale. The currencies are separated by
         * colon (,). For fiat options (USD, EUR, etc.) the word "Fiat" is used. If a large list of
         * cryptocurrencies is accepted, the word "Various" is used.
         */
        accepting: string;
    };
    /**
     * The Pre-ICO and the ICO start and end dates.
     */
    dates: {
        /**
         * The PreICO start date.
         */
        preIcoStart: string;
        /**
         * The Pre-ICO end date.
         */
        preIcoEnd: string;
        /**
         * The ICO start date.
         */
        icoStart: string;
        /**
         * The ICO end date.
         */
        icoEnd: string;
    };
    /**
     * The list of team members and advisors.
     */
    team: Array<{
        /**
         * The team member's name.
         */
        name: string;
        /**
         * The team member's title.
         */
        title: string;
        /**
         * The links for the team member's social media accounts.
         */
        socials: Array<{
            /**
             * The site name - options: twitter, facebook, linkedin, other.
             */
            site: string;
            /**
             * The URL to the social profile.
             */
            url: string;
        }>;
        /**
         * The team member's group, e.g. "Team" or "Advisors".
         */
        group: string;
        /**
         * The URL for the ICObench page on which you can find the team member's photo.
         */
        photo: string;
        /**
         * The team member's ICO Success Score.
         */
        iss: number;
    }>;
    /**
     * The list of all the ratings the ICO has received from the experts.
     */
    ratings: Array<{
        /**
         * The date of review.
         */
        date: string;
        /**
         * The expert's name.
         */
        name: string;
        /**
         * The expert's title.
         */
        title: string;
        /**
         * The URL for the ICObench page on which you can find the expert's photo.
         */
        photo: string;
        /**
         * Rating from 1 to 5 that was given for the team.
         */
        team: number;
        /**
         * Rating from 1 to 5 that was given for the vision.
         */
        vision: number;
        /**
         * Rating from 1 to 5 that was given for the product.
         */
        product: number;
        /**
         * Rating from 1 to 5 that was given for the ICO profile (Benchy only).
         */
        profile: number;
        /**
         * The written review the expert has provided.
         */
        review: string;
        /**
         * The percent of weight towards total rating.
         */
        weight: string;
        /**
         * The number of agrees on this rating.
         */
        agree: number;
    }>;
    /**
     * The list of all categories the ICO is listed in.
     */
    categories: Array<{
        /**
         * The category ID.
         */
        id: number;
        /**
         * The category name.
         */
        name: string;
    }>;
    /**
     * The list of all exchanges the token is listed on.
     */
    exchanges: Array<{
        /**
         * The exchange ID.
         */
        id: number;
        /**
         * The exchange name.
         */
        name: string;
        /**
         * The exchange logo.
         */
        logo: string;
        /**
         * The price of token on exchange.
         */
        price: number;
        /**
         * The currency price is in.
         */
        currency: string;
        /**
         * Return on investment of token bought in ICO.
         */
        roi: string;
    }>;
}
