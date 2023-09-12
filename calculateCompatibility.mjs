export default function calculateCompatibility(teamAttributeAverages, will) { // calculateCompatibilityForMember

    console.log("----will---");
    console.log(will);

    console.log("---aver---");
    console.log(teamAttributeAverages);


    // Calculate compatibility score for each attribute and keep a running total
    let overallCompatibilityScore = 0;


    // Calculate the compatibility value for intelligence:
    // This formula calculates the compatibility value for Will's intelligence based on the team's average intelligence.
    // It is set to be 0.5 when Will's intelligence matches the team's average and varies from there.
    // overall:
    const intCompatibilityVal = 0.5 * ((teamAttributeAverages.intelligence + (will.attributes.intelligence - teamAttributeAverages.intelligence))/ teamAttributeAverages.intelligence);
    
    console.log("intCompatibilityVal", intCompatibilityVal);


    let weightedIntVal = intCompatibilityVal;
    if( intCompatibilityVal > 0.5){
        weightedIntVal *= 1.05
        
        // limit weight to maximum of 1.0
        if (weightedIntVal > 1.0){
            weightedIntVal = 1.0
        }
    } else if( intCompatibilityVal < 0.5){
        weightedIntVal *= .95
        // limit weight to minimum of 0.0
          if (weightedIntVal < 0.0){
            weightedIntVal = 0.0
        }
    }
    console.log("weightedIntVal", weightedIntVal);
    



    // // Calculate compatibility score for strength
    // overallCompatibilityScore += Math.abs(will.attributes.strength - teamAttributeAverages.strength);

    // // Calculate compatibility score for endurance
    // overallCompatibilityScore += Math.abs(will.attributes.endurance - teamAttributeAverages.endurance);

    // // Calculate compatibility score for spicyFoodTolerance
    // overallCompatibilityScore += Math.abs(will.attributes.spictyFoodTolerance - teamAttributeAverages.spictyFoodTolerance);

    // // Normalize the overall compatibility score to be within the range of 0 to 10
    // const normalizedCompatibilityScore = Math.min(Math.max(10 - overallCompatibilityScore, 0), 10);

    // return normalizedCompatibilityScore;
};

function calculateCompatibilityPerAttribute(){
    return null;
}