const Discord = require("discord.js");
const client = new Discord.Client();
const Tournament = require("./tournament.js");
const Team = require("./team.js");
const Player = require("./player.js");
const config = require("./config.json");
const fs = require('fs');

// Create an Overwatch tournament
var tourney = new Tournament(config.tournamentId, "Overwatch", config.tourneyName, config.format, config.tieBreakMap);

// Get teams and points
var teams = []; // Holds the teams
var pointsTable = fs.readFileSync('./pointsTable.txt').toString().split("\n");
for(i in pointsTable) {
  var tempArray = pointsTable[i].split(",");
  teams.push(new Team(tempArray[0].trim(), tempArray[1].trim(), tempArray[2].trim(), tempArray[3].trim()));
}
tourney.setTeams(teams);

// Get fixtures
var fixtures = []; // Holds fixtures
var fixtureTable = fs.readFileSync('./fixtures.txt').toString().split("\n");
for(i in fixtureTable){
	fixtures.push(i);
}

//Hard code a teams players for now
var players = [new Player("munkfish#2583", "Durham University", "DUmfist"),
			   new Player("HugeHorse#2122", "Durham University", "DUmfist"),
			   new Player("Beladar#2151", "Durham University", "DUmfist"),
			   new Player("SaintFoxx#2254", "Durham University", "DUmfist"),
			   new Player("Atomital #2466", "Durham University", "DUmfist"),
			   new Player("Mopin#2679", "Durham University", "DUmfist")];

teams[4].setTeamMembers(players); // Team DUmfist

// Start bot
client.login(config.token);

client.on("ready", () => {
  console.log("I am ready!");
});

// Start bot interaction
client.on("message", (message) => {

	// Exit and stop if it's not there
	if (!message.content.startsWith(config.prefix)) return;

	switch(message.content){
		case config.prefix + "test":
	  		message.channel.send("Yeah boiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii!");
	  		break;

	  	case config.prefix + "Deanish":
	  		message.channel.send("Deanish? The big baller shot caller?");
	  		break;

	  	case config.prefix + "teams":
	  		tourney.getTeams().forEach(function(team){
	  			message.channel.send(team.name);
	  		});
	  		break;

	  	case config.prefix + "points":
			tourney.getTeams().forEach(function(team) {
			    message.channel.send(team.name + " " + team.points);
			});		
	  		break;

	  	case config.prefix + "companion":
			message.channel.send("https://thenuel.com/companion?tournamentId=" + config.tourneyId);
			break;

		case config.prefix + "format":
			message.channel.send("This tournaments format is " + tourney.format + " each week.");
			break;

		case config.prefix + "tbm":
			message.channel.send("This weeks tie break map is " + tourney.tieBreakMap);
			break;
	}

	tourney.getTeams().forEach(function(team) {

		if (message.content.startsWith(config.prefix + team.name + " details")) {
			message.channel.send("Team name: " + team.name);
			message.channel.send("University: " + team.university);
			message.channel.send("Points: " + team.points);
			message.channel.send("Captain: " + team.captain);
		}

		if (message.content.startsWith(config.prefix + team.name + " members")) {

			team.teamMembers.forEach(function(member) {

				if(member.IGN == team.captain){
					message.channel.send("Captain: " + member.IGN);
				}
				else
					message.channel.send(member.IGN);
			});
			
		}
	});

});


/* Come back to

	case config.prefix + "fixture":
		var teamMessage = message.content;
		//var index = message.content.indexOf( ' ', str.indexOf( ' ' ) + 1 );
		//var teamName = message.content.substr( index + 1 );
		message.channel.send(teamMessage);
		//message.channel.send("team name " + teamName);
		break;
*/