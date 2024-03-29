const fetch = require('node-fetch');

class Character {
    constructor(baseURL) {
        this.baseURL = baseURL;
        this.headers = {};

        /**
         * Retrieve high level item information for player
         */
        this.gear = false;

        /**
         * Retrieve basic information about guild the player is in
         */
        this.guild = false;

        /**
         * Retrieve the covenant and renown level of the player
         */
        this.covenant = false;

        /**
         * Retrieve raid progression data for character
         */
        this.raid_progression = false;

        /**
         * Retrieve scores by mythic plus season. 
         * You can specify one or more season by appending multiple ':<season-id>' values to this field. 
         * You can also use the alias 'current' and 'previous' instead of a season name to request that relative season. 
         * For example: mythic_plus_scores_by_season:current will request the current season. 
         * Note: Results are returned in an array that matches the order of the seasons in the request.
         */
        this.mythic_plus_scores_by_season = false;

        /**
         * Retrieve current season mythic plus rankings for player.
         */
        this.mythic_plus_ranks = false;

        /**
         * Retrieve ten most recent mythic plus runs for player (current season only).
         */
        this.mythic_plus_recent_runs = false;

        /**
         * Retrieve ten most high scoring mythic plus runs for player (current season only). 
         * Specify the paramater :all to retrieve all of a character's best runs for the season.
         */
        this.mythic_plus_best_runs = false;

        /**
         * Retrieve the player's ten highest Mythic+ runs by Mythic+ level (current season only)
         */
        this.mythic_plus_highest_level_runs = false;

        /**
         * Retrieve the player's ten highest Mythic+ runs by Mythic+ level for the current raid week (current season only)
         */
        this.mythic_plus_weekly_highest_level_runs = false;

        /**
         * Retrieve the player's ten highest Mythic+ runs by Mythic+ level for the previous raid week (current season only)
         */
        this.mythic_plus_previous_weekly_highest_level_runs = false;

        /**
         * Retrieve previous mythic plus rankings for player.
         */
        this.previous_mythic_plus_ranks = false;

        /**
         * Retrieve raid achievement meta status for a player. 
         * This request requires that you specify parameters for the specific tiers you're looking for. 
         * For example if you add ':tier21' to the field you will get the status of Tier 21's meta. 
         * 
         * Multiple tiers can be added to a single request: ':tier21:tier20:tier19'.
         */
        this.raid_achievement_meta = false;

        /**
         * Retrieve AOTC/Cutting Edge achievement status for a given raid slug (or multiple). 
         * Multiple slugs can be specified by separating them by colons.
         */
        this.raid_achievement_curve = false;
    }

    _mythic_plus_scores_by_season_current = ':current';
    _mythic_plus_scores_by_season_previous = ':previous';

    _mythic_plus_best_runs_all = ':all';

    _raid_achievement_curve_NYA = ':nyalotha-the-waking-city';
    _raid_achievement_curve_CN = ':castle-nathria';
    _raid_achievement_curve_SOD = ':sanctum-of-domination';

    _raid_achievement_meta_NYA = ':tier26';
    _raid_achievement_meta_CN = ':tier27';
    _raid_achievement_meta_SOD = ':tier28';

    _header_no_cache = {
        'Cache-Control': 'no-cache'
    };

    async request(URL) {
        let RIOResponse = await fetch(URL, {
            headers: this.headers
        });
        
        return await RIOResponse.json();
    }

    async getProfile(region, realm, name) {
        const fields = this.getFieldsString();

        const URL = `${this.baseURL}`
            + `/characters`
            + `/profile`
            + `?region=${region.toLowerCase()}`
            + `&realm=${realm.toLowerCase()}`
            + `&name=${name}`
            + (fields.length > 0 ? `&fields=${fields}` : '');
            
        return this.request(URL);
    }

    async getGear(region, realm, name) {
        this.gear = true;
        return await this.getProfile(region, realm, name);
    }

    async getGuild(region, realm, name) {
        this.guild = true;
        return await this.getProfile(region, realm, name);
    }

    async getCovenant(region, realm, name) {
        this.covenant = true;
        return await this.getProfile(region, realm, name);
    }

    async getRaidProgression(region, realm, name) {
        this.raid_progression = true;
        return await this.getProfile(region, realm, name);
    }

    async getCurrentMythicPlusScores(region, realm, name) {
        this.mythic_plus_scores_by_season = this._mythic_plus_scores_by_season_current;
        return await this.getProfile(region, realm, name);
    }

    async getSeasonMythicPlusScores(region, realm, name, season) {
        this.mythic_plus_scores_by_season = season;
        return await this.getProfile(region, realm, name);
    }

    async getCurrentMythicPlusRanks(region, realm, name) {
        this.mythic_plus_ranks = true;
        return await this.getProfile(region, realm, name);
    }

    async getMythicPlusRecentRuns(region, realm, name) {
        this.mythic_plus_recent_runs = true;
        return await this.getProfile(region, realm, name);
    }

    async getMythicBestRuns(region, realm, name) {
        this.mythic_plus_best_runs = true;
        return await this.getProfile(region, realm, name);
    }

    async getAllMythicBestRuns(region, realm, name) {
        this.mythic_plus_best_runs = this._mythic_plus_best_runs_all;
        return await this.getProfile(region, realm, name);
    }

    async getMythicPlusHighestRuns(region, realm, name) {
        this.mythic_plus_highest_level_runs = true;
        return await this.getProfile(region, realm, name);
    }

    async getMythicPlusWeeklyHighestRuns(region, realm, name) {
        this.mythic_plus_weekly_highest_level_runs = true;
        return await this.getProfile(region, realm, name);
    }

    async getMythicPlusPreviousWeekHighestRuns(region, realm, name) {
        this.mythic_plus_previous_weekly_highest_level_runs = true;
        return await this.getProfile(region, realm, name);
    }

    async getRaidAchievementMeta(region, realm, name, tier) {
        this.raid_achievement_meta = tier;
        return await this.getProfile(region, realm, name);
    }

    async getRaidAchievementCurve(region, realm, name, raid) {
        this.raid_achievement_curve = raid;
        return await this.getProfile(region, realm, name);
    }

    getFieldsString() {
        let fields = "";
        if (this.gear !== false) {
            fields += this.addFields(fields, "gear", "");
        }
        
        if (this.guild !== false) {
            fields += this.addFields(fields, "guild", "");
        }
        
        if (this.covenant !== false) {
            fields += this.addFields(fields, "covenant", "");
        }
        
        if (this.raid_progression !== false) {
            fields += this.addFields(fields, "raid_progression", "");
        }
        
        if (this.mythic_plus_scores_by_season !== false) {
            fields += this.addFields(fields, "mythic_plus_scores_by_season", this.mythic_plus_scores_by_season);
        }
        
        if (this.mythic_plus_ranks !== false) {
            fields += this.addFields(fields, "mythic_plus_ranks", "");
        }
        
        if (this.mythic_plus_recent_runs !== false) {
            fields += this.addFields(fields, "mythic_plus_recent_runs", "");
        }
        
        if (this.mythic_plus_best_runs !== false) {
            fields += this.addFields(fields, "mythic_plus_best_runs", this.mythic_plus_best_runs);
        }
        
        if (this.mythic_plus_highest_level_runs !== false) {
            fields += this.addFields(fields, "mythic_plus_highest_level_runs", this.mythic_plus_highest_level_runs);
        }
        
        if (this.mythic_plus_weekly_highest_level_runs !== false) {
            fields += this.addFields(fields, "mythic_plus_weekly_highest_level_runs", this.mythic_plus_weekly_highest_level_runs);
        }
        
        if (this.mythic_plus_previous_weekly_highest_level_runs !== false) {
            fields += this.addFields(fields, "mythic_plus_previous_weekly_highest_level_runs", this.mythic_plus_previous_weekly_highest_level_runs);
        }
        
        if (this.previous_mythic_plus_ranks !== false) {
            fields += this.addFields(fields, "previous_mythic_plus_ranks", this.previous_mythic_plus_ranks);
        }
        
        if (this.raid_achievement_meta !== false) {
            fields += this.addFields(fields, "raid_achievement_meta", this.raid_achievement_meta);
        }
        
        if (this.raid_achievement_curve !== false) {
            fields += this.addFields(fields, "raid_achievement_curve", this.raid_achievement_curve);
        }

        return fields;
    }

    addFields(fields, name, content) {
        return (fields === "" ? "" : ",") + name + (content === true ? "" : content);
    }
}
module.exports = Character;