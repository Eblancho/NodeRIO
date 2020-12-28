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
- [x] Character Profile
- [ ] Default Periods
- [ ] Guild Boss Kill
- [ ] Guild Profile
- [ ] Global Mythic+ Affixes
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
