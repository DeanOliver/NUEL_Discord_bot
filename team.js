'use strict';

class Team {
    constructor(teamName, university, points, captain) {
        this.name = teamName;
        this.university = university;
        this.points = points;
        this.captain = captain;
        this.teamMembers = [];
    }
    getTeamName() {
        return this.name;
    }

    getUniversity(){
    	return this.university;
    }

    getPoints() {
        return this.points;
    }

    setTeamMembers(members){
        this.teamMembers = members;
        return true;
    }
};

module.exports = Team;