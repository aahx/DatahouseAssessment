import input from "./input.mjs";
import calculateTeamAttributeAverages from "./calculateTeamAttributeAverages.mjs";
import calculateCompatibility from "./calculateCompatibility.mjs";


// Will's attributes
const will = {
    attributes: {
        intelligence: 3,
        strength: 2,
        endurance: 9,
        spictyFoodTolerance: 9,
    },
};




function processInput(input){
    // console.log(JSON.stringify(input, null, 2));

    const team = input.team;
    const teamAttributeAverages = calculateTeamAttributeAverages(team);

    calculateCompatibility(teamAttributeAverages, will)


}

processInput(input);