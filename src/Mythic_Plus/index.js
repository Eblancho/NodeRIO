const fetch = require('node-fetch');

class Mythic_Plus {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.headers = {};
    }
    
    async request(URL) {
        console.log(URL);
        let RIOResponse = await fetch(URL, {
            headers: this.headers
        });
        
        return await RIOResponse.json();
    }

    async getAffixes(region = "eu", locale = "fr") {
        const URL = `${this.baseURL}`
            + `/mythic-plus`
            + `/affixes`
            + `?region=${region.toLowerCase()}`
            + `&locale=${locale.toLowerCase()}`;
            
        return this.request(URL);
    }
}

module.exports = Mythic_Plus;