const nodeRIO = require('../src/nodeRIO');
const assert = require('assert').strict;

describe("active character test", function() {
    const region = "eu";
    const realm = "confrérie-du-thorium";
    const name = "dread";
    const expectedName = "Dread";

    it("should be able to get basic profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getProfile(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName);
            assert.notStrictEqual(result.achievement_points, 0);
        })
    });

    it("should be able to get gear profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getGear(region, realm, name).then(result => {
            
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.notStrictEqual(result.gear.item_level_equipped, 0); // Pas de bug ilvl
            assert.notStrictEqual(Object.keys(result.gear.items).length, 0); // Pas de bug sur le gear
        })
    });

    it("should be able to get guild profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getGuild(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.guild, "object"); // Pas de bug guild
        })
    });

    it("should be able to get covenant profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getCovenant(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.covenant, "object"); // Pas de bug covenant
        })
    });

    it("should be able to get raid progression profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getRaidProgression(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.raid_progression, "object"); // Pas de bug raid
        })
    });

    it("should be able to get current m+ scores profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getCurrentMythicPlusScores(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.mythic_plus_scores_by_season, "object"); // Pas de bug m+
            assert.strictEqual(typeof result.mythic_plus_scores_by_season[0].scores, "object"); // Pas de bug m+
        })
    });

    it("should be able to get spec current m+ scores profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getSeasonMythicPlusScores(region, realm, name, caller.Character._mythic_plus_scores_by_season_current).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.mythic_plus_scores_by_season, "object"); // Pas de bug m+
            assert.strictEqual(typeof result.mythic_plus_scores_by_season[0].scores, "object"); // Pas de bug m+
        })
    });

    it("should be able to get spec previous m+ scores profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getSeasonMythicPlusScores(region, realm, name, caller.Character._mythic_plus_scores_by_season_previous).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.mythic_plus_scores_by_season, "object"); // Pas de bug m+
            assert.strictEqual(typeof result.mythic_plus_scores_by_season[0].scores, "object"); // Pas de bug m+
        })
    });

    it("should be able to get current m+ ranks profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getCurrentMythicPlusRanks(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.mythic_plus_ranks, "object"); // Pas de bug m+
            assert.strictEqual(typeof result.mythic_plus_ranks.overall, "object"); // Pas de bug m+
        })
    });

    it("should be able to get recent m+ runs profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getMythicPlusRecentRuns(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.mythic_plus_recent_runs, "object"); // Pas de bug m+
        })
    });

    it("should be able to get best m+ runs profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getMythicBestRuns(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.mythic_plus_best_runs, "object"); // Pas de bug m+
        })
    });

    it("should be able to get all best m+ runs profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getAllMythicBestRuns(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.mythic_plus_best_runs, "object"); // Pas de bug m+
        })
    });

    it("should be able to get highest m+ run profile", async function() {
        this.timeout(5000);
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getMythicPlusHighestRuns(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.mythic_plus_highest_level_runs, "object"); // Pas de bug m+
        })
    });

    it("should be able to get highest m+ weekly run profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getMythicPlusWeeklyHighestRuns(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.mythic_plus_weekly_highest_level_runs, "object"); // Pas de bug m+
        })
    });

    it("should be able to get highest m+ previous weekly run profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getMythicPlusPreviousWeekHighestRuns(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.mythic_plus_previous_weekly_highest_level_runs, "object"); // Pas de bug m+
        })
    });
    
});

describe("inactive character test", function() {
    const region = "eu";
    const realm = "confrérie-du-thorium";
    const name = "redk";
    const expectedName = "Redk";

    it("should be able to get basic profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getProfile(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName);
            assert.notStrictEqual(result.achievement_points, 0);
        })
    });

    it("should be able to get gear profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getGear(region, realm, name).then(result => {
            
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.notStrictEqual(result.gear.item_level_equipped, 0); // Pas de bug ilvl
            assert.notStrictEqual(Object.keys(result.gear.items).length, 0); // Pas de bug sur le gear
        })
    });

    it("should be able to get guild profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getGuild(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.guild, "object"); // Pas de bug guild
        })
    });

    it("should be able to get covenant profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getCovenant(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.covenant, "object"); // Pas de bug covenant
        })
    });

    it("should be able to get raid progression profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getRaidProgression(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.raid_progression, "object"); // Pas de bug raid
        })
    });

    it("should be able to get current m+ scores profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getCurrentMythicPlusScores(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.mythic_plus_scores_by_season, "object"); // Pas de bug m+
            assert.strictEqual(typeof result.mythic_plus_scores_by_season[0].scores, "object"); // Pas de bug m+
        })
    });

    it("should be able to get spec current m+ scores profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getSeasonMythicPlusScores(region, realm, name, caller.Character._mythic_plus_scores_by_season_current).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.mythic_plus_scores_by_season, "object"); // Pas de bug m+
            assert.strictEqual(typeof result.mythic_plus_scores_by_season[0].scores, "object"); // Pas de bug m+
        })
    });

    it("should be able to get spec previous m+ scores profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getSeasonMythicPlusScores(region, realm, name, caller.Character._mythic_plus_scores_by_season_previous).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.mythic_plus_scores_by_season, "object"); // Pas de bug m+
            assert.strictEqual(typeof result.mythic_plus_scores_by_season[0].scores, "object"); // Pas de bug m+
        })
    });

    it("should be able to get current m+ ranks profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getCurrentMythicPlusRanks(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.mythic_plus_ranks, "object"); // Pas de bug m+
            assert.strictEqual(typeof result.mythic_plus_ranks.overall, "object"); // Pas de bug m+
        })
    });

    it("should be able to get recent m+ runs profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getMythicPlusRecentRuns(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.mythic_plus_recent_runs, "object"); // Pas de bug m+
        })
    });

    it("should be able to get best m+ runs profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getMythicBestRuns(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.mythic_plus_best_runs, "object"); // Pas de bug m+
        })
    });

    it("should be able to get all best m+ runs profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getAllMythicBestRuns(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.mythic_plus_best_runs, "object"); // Pas de bug m+
        })
    });

    it("should be able to get highest m+ run profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getMythicPlusHighestRuns(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.mythic_plus_highest_level_runs, "object"); // Pas de bug m+
        })
    });

    it("should be able to get highest m+ weekly run profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getMythicPlusWeeklyHighestRuns(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.mythic_plus_weekly_highest_level_runs, "object"); // Pas de bug m+
        })
    });

    it("should be able to get highest m+ previous weekly run profile", async function() {
        this.timeout(5000);
        const caller = new nodeRIO();
        return caller.Character.getMythicPlusPreviousWeekHighestRuns(region, realm, name).then(result => {
            assert.strictEqual(result.name, expectedName); // Bon perso
            assert.strictEqual(typeof result.mythic_plus_previous_weekly_highest_level_runs, "object"); // Pas de bug m+
        })
    });
    
});