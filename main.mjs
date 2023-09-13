import input from "./input.mjs";

import calculateTeamAttributeAverages from "./calculateTeamAttributeAverages.mjs";
import { compatibilityCalculator } from "./calculateCompatibility.mjs";


// Will's attributes
const will = {
    attributes: {
        intelligence: 3,
        strength: 2,
        endurance: 9,
        spictyFoodTolerance: 9,
    },
};




function processInput(input) {
    // Checking Input
    // console.log(JSON.stringify(input, null, 2));

    // Variables
    const t = input.team;
    const a = input.applicants;

    // Step 1: Calculating the average of each attribute for current team(t)
    const avgAttrs = calculateTeamAttributeAverages(t);

    // Step 2: Compatibility Calculator - takes in team average and applicants - outputs results
    compatibilityCalculator(avgAttrs, a);


}

processInput(input);