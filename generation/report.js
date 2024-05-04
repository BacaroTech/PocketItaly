JG.repeat(1000, 1000, {
    id: JG.objectId(),
    reportNumber() {
        return JG.guid().split("-")[0];
    },
    date: JG.date(new Date(2022, 0, 1), new Date(2024, 0, 1)),
    reportType: JG.random("map", "web", "manual"),
    outcome: JG.random("positive", "negative"),
    levelFake() {
        if (this.outcome === "positive")
            return JG.integer(0, 50);
        else return JG.integer(51, 100);
    },
    positiveCounting: JG.integer(),
    negativeCounting() {
        if (this.outcome === "positive") {
            return JG.integer(0, this.positiveCounting - 1);
        } else {
            return JG.integer(this.positiveCounting, 1000);
        }
    },
    analysis() {
        if (this.reportType === "web") {
            return "link";
        }
        return JG.random("code", "image");
    },
    lat() {
        if (this.reportType === "map") 
            return JG.floating(36, 47, 6);
        return null;
    },
    long() {
        if (this.reportType === "map") 
            return JG.floating(6, 18, 6);
        return null;
    },
    city() {
        if (this.reportType === "map") 
            return JG.city()
        return null;
    },
    tradeType() {
        if (this.reportType === "manual")
            return JG.random("online", "physic");
        return null;
    },
    user() {
        if (this.reportType === "manual") {
            return JG.firstName();
        } else return null;
    },
    emailDomain() {
        if (this.reportType === "manual") {
            return JG.random("gmail", "outlook", "yahoo", "email");
        } else return null;
    },
    email() {
        if (this.reportType === "manual")
            return (
                _.snakeCase(this.user) +
                '@' +
                this.emailDomain +
                JG.domainZone()
            ).toLowerCase();
        else return null;
    },
    domain() {
        if (this.reportType === "web") {
            return JG.loremIpsum({ units: 'words', count: 2 });
        } else return null;
    },
    objectType() {
        if (this.reportType === "web") {
            return JG.loremIpsum({ units: 'words', count: 3 });
        } else return null;
    },
    productOwner() {
        if (this.reportType === "web") {
            return JG.loremIpsum({ units: 'words', count: 2 });
        } else return null;
    },
    urlProduct() {
        if (this.reportType === "web") {
            let domain = "https://www.";
            domain += this.domain.trim();
            domain += "/" + JG.loremIpsum({ units: 'words', count: 1 });
            domain += "/" + JG.objectId();
            return domain;
        } else return null;
    }
});
