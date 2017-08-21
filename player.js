'use strict';

class Player {
    constructor(IGN, university, team) {
        this.IGN = IGN;
        this.university = university;
        this.team = team;
    }
    getIGN() {
        return this.IGN;
    }

    getUniversity(){
    	return this.university;
    }

    getTeam() {
        return this.team;
    }
};

module.exports = Player;