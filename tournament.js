'use strict';

class Tournament {

    constructor(id, game, tourneyName, format, tieBreakMap) {
        this.id = id;
        this.game = game;
        this.tourneyName = tourneyName;
        this.format = format;
        this.tieBreakMap = tieBreakMap;
        this.teamArray = [];
    }
    getTeamName() {
        return this.name;
    }

    getGame(){
    	return this.game;
    }

    getTourneyName(){
        return this.tourneyName;
    }

    getFormat(){
        return this.format;
    }

    getTieBreakMap(){
        return this.tieBreakMap;
    }

    getTeams(){
        return this.teamArray;
    }

    setTeams(teams){
        this.teamArray = teams;
        return true;
    }
};

module.exports = Tournament;