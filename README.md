# NodeRIO

## A Node.JS RaiderIO Library To Retrieve and use data from the RaiderIO Api. 

## Installation
```bash
$ npm install --save noderiowrapper
```

## Usage, retrieve gear, guild and MM+ score from current season
```js
const noderiowrapper = require("noderiowrapper");

const nodeRIO = new noderiowrapper();

nodeRIO.Character.gear = true;
nodeRIO.Character.guild = true;
nodeRIO.Character.mythic_plus_scores_by_season = nodeRIO.Character._mythic_plus_scores_by_season_current;

nodeRIO.Character.getProfile("eu", "confrérie-du-thorium", "redwh").then((result) => {
    console.log(result);
});
```

### Currently Supports
- [x] Character Profile (With option)
- [x] Character Profile Gear
- [x] Character Profile Guild
- [x] Character Profile Covenant
- [x] Character Profile Raid Progression
- [x] Character Profile Mythic+ Score for current season
- [x] Character Profile Mythic+ Score by season
- [x] Character Profile Mythic+ Rank
- [x] Character Profile Mythic+ 10 Recent Runs (current season)
- [x] Character Profile Mythic+ 10 Best Runs (current season)
- [x] Character Profile Mythic+ All Best Runs (current season)
- [x] Character Profile Mythic+ 10 Highest Runs (current season)
- [x] Character Profile Mythic+ 10 Weekly Highest Runs
- [x] Character Profile Mythic+ 10 Previous Week Highest Runs
- [ ] Default Periods
- [ ] Guild Boss Kill
- [ ] Guild Profile
- [x] Global Mythic+ Affixes
- [ ] Global Mythic+ Leaderboard Capacity
- [ ] Global Mythic+ Top Runs
- [ ] Global Mythic+ Colors used for score tiers
- [ ] Global Mythic+ Static Data
- [ ] Global Raiding Boss Rankings
- [ ] Global Raiding Hall of fame
- [ ] Global Raiding Progression
- [ ] Global Raiding Raid rankings
- [ ] Global Raiding Static Data

### Authors

* **[Eblancho (Me)](https://github.com/Eblancho)**

### Documentation (More details : https://raider.io/api)

## Character
- **getProfile(region, realm, name)**: retrieve one or many information for player depending on the configuration of the object
- **getGear(region, realm, name)**: retrieve high level item information for player
- **getGuild(region, realm, name)**: retrieve basic information about guild the player is in
- **getCovenant(region, realm, name)**: retrieve the covenant and renown level of the player
- **getRaidProgression(region, realm, name)**: retrieve raid progression data for character
- **getCurrentMythicPlusScores(region, realm, name)**: retrieve scores for current mythic plus season.
- **getSeasonMythicPlusScores(region, realm, name, season)**: retrieve scores by mythic plus season. You can specify one or more season by appending multiple ':<season-id>' values to this field. 
*Note: Results are returned in an array that matches the order of the seasons in the request.*
- **getCurrentMythicPlusRanks(region, realm, name)**: retrieve current season mythic plus rankings for player.
- **getMythicPlusRecentRuns(region, realm, name)**: retrieve ten most recent mythic plus runs for player (current season only).
- **getMythicBestRuns(region, realm, name)**: retrieve ten most high scoring mythic plus runs for player (current season only).
- **getAllMythicBestRuns(region, realm, name)**: retrieve most high scoring mythic plus runs for each keys for player (current season only).
- **getMythicPlusHighestRuns(region, realm, name)**: retrieve the player's ten highest Mythic+ runs by Mythic+ level (current season only)
- **getMythicPlusWeeklyHighestRuns(region, realm, name)**: retrieve the player's ten highest Mythic+ runs by Mythic+ level for the current raid week (current season only)
- **getMythicPlusPreviousWeekHighestRuns(region, realm, name)**: retrieve the player's ten highest Mythic+ runs by Mythic+ level for the previous raid week (current season only)

## Default

## Guild

## Mythic Plus
- **getAffixes(region = "eu", locale = "fr")**: Retrieve the affixes for a specific region, including the latest run seen with this affix


## Raiding
