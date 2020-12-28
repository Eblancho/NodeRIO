const Character = require('./Character/index.js');
const Default = require('./Default/index.js');
const Guild = require('./Guild/index.js');
const Mythic_Plus = require('./Mythic_Plus/index.js');
const Raiding = require('./Raiding/index.js');

class nodeRIO {
    constructor(version) {
        this.baseURL = "https://raider.io/api/" + (version ? version : "v1");
        this.Character = new Character(this.baseURL);
        this.Default = new Default(this.baseURL);
        this.Guild = new Guild(this.baseURL);
        this.Mythic_Plus = new Mythic_Plus(this.baseURL);
        this.Raiding = new Raiding(this.baseURL);
    }
}

module.exports = nodeRIO;