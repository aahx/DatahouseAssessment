import input from "./input.mjs";

/*
    The idea is to calculate average attribute score of the team.
    If the new candidate's attributes are greater than the average of the team, he is more favorable/ compatible.
    If new candidate's attributes are less than the average of the team, he is less favorable/ comaptiable.

    I've also weighted it, some attributes are worth more than others
*/

console.log(JSON.stringify(input, null, 2));

/*



*/


function calculateAttributeWeights(team) {
    // Initialize an object to store the total attribute values
    const attributeTotal = {};

    // Get the number of team members
    const numTeamMembers = team.length;

    // Step 1: Calculate the total attribute values
    team.forEach((member) => {
        for (const attribute in member.attributes) {
            if (!attributeTotal[attribute]) {
                // If the attributeTotal object doesn't have an entry for the attribute, initialize it to 0
                attributeTotal[attribute] = 0;
            }
            // Add the attribute value of the current team member to the total
            attributeTotal[attribute] += member.attributes[attribute];
        }
    });

    // Step 2: Calculate the average attribute values
    const attributeAverage = {};
    for (const attribute in attributeTotal) {
        // Calculate the average value for each attribute by dividing the total by the number of team members
        attributeAverage[attribute] =
            attributeTotal[attribute] / numTeamMembers;
    }

    // Step 3: Normalize the average values to ensure the weights sum up to 1.0
    const totalAverage = Object.values(attributeAverage).reduce(
        (total, value) => total + value,
        0
    );

    const attributeWeights = {};
    for (const attribute in attributeAverage) {
        // Normalize each average value by dividing it by the total average
        attributeWeights[attribute] =
            attributeAverage[attribute] / totalAverage;
    }

    return attributeWeights;
}

// Calculate attribute weights based on existing team members
const attributeWeights = calculateAttributeWeights(team);
console.log("Attribute Weights:", attributeWeights);
