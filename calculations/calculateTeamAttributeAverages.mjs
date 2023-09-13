export default function calculateTeamAttributeAverages(team) {
    // Step 0: Create an object to hold the calculated average attribute values
    const attributeAverage = {};

    // Step 1: Calculate the sum of attribute values, for each attribute, across all team members
    for (const member of team) {
        for (const attribute in member.attributes) {
            // If the attribute hasn't been encountered yet, initialize it to 0
            if (!attributeAverage[attribute]) {
                attributeAverage[attribute] = 0;
            }
            // Add the attribute value of the current team member to the total
            attributeAverage[attribute] += member.attributes[attribute];
        }
    }

    // Step 2: Calculate the number of team members
    const numTeamMembers = team.length;

    // Step 3: Calculate the average attribute values by dividing the totals by the number of team members
    for (const attribute in attributeAverage) {
        // Calculate the average value for each attribute
        attributeAverage[attribute] /= numTeamMembers;

        // Round values to two decimal places
        attributeAverage[attribute] = parseFloat(attributeAverage[attribute].toFixed(2));
    }

    // Step 4: Return the calculated average attribute values
    return attributeAverage;
}