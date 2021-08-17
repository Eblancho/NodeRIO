const testCharacter = require('./Character');

describe("active character test", function() {
    const region = "eu";
    const realm = "confrérie-du-thorium";
    const name = "dread";
    const expectedName = "Dread";

    testCharacter(region, realm, name, expectedName); 
});

describe("inactive character test", function() {
    const region = "eu";
    const realm = "confrérie-du-thorium";
    const name = "redk";
    const expectedName = "Redk";

    testCharacter(region, realm, name, expectedName);
});