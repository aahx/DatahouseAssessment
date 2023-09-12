function calculateCompatibility(will, teamAverages) {
    const weightedCompatibility = {};

    for (const attributeName in will.attributes) {
        if (will.attributes.hasOwnProperty(attributeName)) {
            const attributeCompatibilityValue = 0.5 * ((teamAverages[attributeName] + (will.attributes[attributeName] - teamAverages[attributeName])) / teamAverages[attributeName]);

            let weightedAttributeCompatibility = attributeCompatibilityValue;

            if (attributeCompatibilityValue > 0.5) {
                weightedAttributeCompatibility *= 1.05;

                // Limit weight to a maximum of 1.0
                if (weightedAttributeCompatibility > 1.0) {
                    weightedAttributeCompatibility = 1.0;
                }
            } else if (attributeCompatibilityValue < 0.5) {
                weightedAttributeCompatibility *= 0.95;

                // Limit weight to a minimum of 0.0
                if (weightedAttributeCompatibility < 0.0) {
                    weightedAttributeCompatibility = 0.0;
                }
            }

            weightedCompatibility[attributeName] = weightedAttributeCompatibility;
        }
    }

    return weightedCompatibility;
}

// Example usage:
const will = {
    attributes: {
        intelligence: 3,
        strength: 2,
        endurance: 9,
        spictyFoodTolerance: 9,
    },
};

const teamAverages = {
    intelligence: 4.33,
    strength: 3.67,
    endurance: 4.33,
    spictyFoodTolerance: 4,
};

const weightedCompatibility = calculateCompatibility(will, teamAverages);

// Print the results
for (const attributeName in weightedCompatibility) {
    if (weightedCompatibility.hasOwnProperty(attributeName)) {
        console.log(`Weighted Compatibility for ${attributeName}: ${weightedCompatibility[attributeName]}`);
    }
}
