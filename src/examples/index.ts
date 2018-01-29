// tslint:disable:no-console
import * as config from "config";
import { IcoBench } from "../icobench";

const ib = new IcoBench(config.get("icobench.publicKey"), config.get("icobench.privateKey"));

ib.all({country: "Russia", accepting: "BTC", page: 1})
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.error(e);
    });

ib.filters()
    .then((filters) => {
        console.log(filters.categories[0]);
        console.log(filters.platforms[0]);
        console.log(filters.accepting[0]);
        console.log(filters.trading[0]);
        console.log(filters.countries[0]);
    })
    .catch((e) => {
        console.error(e);
    });

ib.trending()
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.error(e);
    });

ib.ratings()
    .then((data) => {
        if (data && data.results) {
            console.log(data.results.length);
            console.log(data.results[0]);
        }
    })
    .catch((e) => {
        console.error(e);
    });

ib.profile("viberate")
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.error(e);
    });

ib.people("expert", {page: 1})
    .then((data) => {
        if (data && data.results) {
            console.log(data.results.map((person) => console.log(person.name)));
            console.log(data.results.length);
        }
    })
    .catch((e) => {
        console.error(e);
    });

ib.stats()
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.error(e);
    });
