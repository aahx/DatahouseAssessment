import input from "./data/input.mjs";
import calculateTeamAttributeAverages from "./calculations/calculateTeamAttributeAverages.mjs";
import compatibilityCalculator from "./calculations/compatibilityCalculator.mjs";


/**
 * Process the input data to calculate compatibility scores for applicants.
 * @param {Object} input - Input data containing team and applicants information.
 * @returns {Object} - Result containing compatibility scores for applicants.
 */
function processInput(input) {
    const t = input.team; // Team data
    const a = input.applicants; // List of applicants

    // Step 1: Calculate the average of each attribute for the current team (t)
    const avgAttrs = calculateTeamAttributeAverages(t);

    // Step 2: Calculate compatibility scores for each applicant
    const result = compatibilityCalculator(avgAttrs, a);

    // Return the compatibility scores for the applicants
    return {
        scoredApplicants: result
    }
}

const result = processInput(input);
console.log(result);