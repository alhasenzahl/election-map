//Politician object that stores the properties which allow you to create both political candidates.

const createPolitician = function(name, partyColor) {
  
    let politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;
    politician.countVotes = function() {
        
        this.totalVotes = 0;

        for (let i = 0; i < this.electionResults.length; i += 1) {
        this.totalVotes += this.electionResults[i];
        }
        
    };

    return politician;
};

//Creating political candidate #1

const sally = createPolitician('Sally Sue', [132, 17, 11]);
sally.electionResults = [5, 1, 7, 2, 17, 6, 4, 2, 1, 1, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 11, 3, 2, 11, 1, 3, 7, 2];
sally.countVotes();

//Creating political candidate #2

const marky = createPolitician('Marky Mark', [245, 141, 136]);
marky.electionResults = [4, 2, 4, 4, 38, 3, 3, 1, 2, 28, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 27, 3, 1, 2, 11, 2, 3, 1];
marky.countVotes();

//This code displays the winning candidate in the table at the top of the map.

let theWinner = '???';

if (sally.totalVotes > marky.totalVotes) {
    theWinner = sally.name;
} else if (marky.totalVotes > sally.totalVotes) {
    theWinner = marky.name;
} else {
    theWinner = 'DRAW!'
}

console.log(theWinner);

const setStateResults = function(state) {

    //This code helps determine which candidate received more votes for each state and colors each state accordingly when it is hovered over in the map.

    theStates[state].winner = null;

    if (sally.electionResults[state] > marky.electionResults[state]) {
        theStates[state].winner = sally;
    } else if (marky.electionResults[state] > sally.electionResults[state]) {
        theStates[state].winner = marky;
    } 

    let stateWinner = theStates[state].winner;

    if (stateWinner !== null) {
        theStates[state].rgbColor = stateWinner.partyColor;
    } else {
        theStates[state].rgbColor = [11, 32, 57];
    }

    //The code below helps display the proper stats in the table under the map for each state when you hover over it in the map.  The stats show the state, the state's abbreviation, how many votes each candidate got for that state, and who won that state overall.

    stateName.innerText = theStates[state].nameFull; 
    abbrName.innerText = `(${theStates[state].nameAbbrev})`;
    resultOne.innerText = sally.electionResults[state];
    resultTwo.innerText = marky.electionResults[state];

    if (sally.electionResults[state] === marky.electionResults[state]) {
        winnerName.innerText = 'DRAW';
    } else {
        winnerName.innerText = theStates[state].winner.name;
    }
}



//This code connects the total vote tallies for each candidate and the overall winner to the table at the top of the page.

const countryResults = document.getElementById('countryResults');
const row = countryResults.children[0].children[0];

row.children[0].innerText = sally.name;
row.children[1].innerText = sally.totalVotes;
row.children[2].innerText = marky.name;
row.children[3].innerText = marky.totalVotes;
row.children[5].innerText = theWinner;

//This code connects the total votes per state per candidate to the interactive table at the bottom right of the map.

const stateResults = document.getElementById('stateResults');

//Setting the header of the States Table.

const header = stateResults.children[0].children[0];
const stateName = header.children[0]; 
const abbrName = header.children[1]; 

//Setting the body of the States Table.

const body = stateResults.children[1];
const nameOne = body.children[0].children[0];
const resultOne = body.children[0].children[1]; 
const nameTwo = body.children[1].children[0];
const resultTwo = body.children[1].children[1]; 
const winnerName = body.children[2].children[1];  

//Assigning the names of each candidate to the proper part of the table.

nameOne.innerText = sally.name;
nameTwo.innerText = marky.name;
