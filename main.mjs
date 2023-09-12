import input from "./input.mjs";
import calculateTeamAttributeAverages from "./calculateTeamAttributeAverages.mjs";


function processInput(input){
    // console.log(JSON.stringify(input, null, 2));

    const team = input.team;
    const teamAttributeAverages = calculateTeamAttributeAverages(team);

}

processInput(input);