import attributeWeights from "./attributeWeights.mjs";

/*

main --> {
    calculateCompatibilityForAllCandidates(teamAvgAttributes, candidates){

        arr = [];

        for( const candidate in candidates){
            candidate obj = calculateCompScorePerCandidate(candidate, teamAvgAttributes)
            push.arr(obj)
        }

        return arr
    }
}

-----> back to main main
    const results = {
        "scoredApplicants" : arr
    }

    return results?


secondary --> 
    calculateCompScore {
        -- the function I have below here.. and in calcualteCompatibiltiy2.mjs
        -- returns obj = { 
                "name" : "name",
                "score" : score
            }
    }
*/

export function compatibilityCalculator(teamAvgAttrs, applicants) {
    let result = [];
    
    // Looping through each applicant to calculate score obj and pushing to result
    for (const applicant of applicants) {
        // console.log("---inner---");
        // console.log(applicant);
        
        const applicantScore = calculateApplicantCompatibility(teamAvgAttrs, applicant);

        // result.push(applicantScore);
        // console.log("---in-loop result---");
        // console.log(result);
    }

    // console.log("--- final result --- ");
    // console.log(result);
}




function calculateApplicantCompatibility2(teamAttributeAverages, will) { // calculateCompatibilityForMember

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
    const intCompatibilityVal = 0.5 * ((teamAttributeAverages.intelligence + (will.attributes.intelligence - teamAttributeAverages.intelligence)) / teamAttributeAverages.intelligence);
    // EXTRA
    // const intCompatibilityVal = 0.5 * 
    // FOR [[ ((teamAttributeAverages.intelligence + (will.attributes.intelligence - teamAttributeAverages.intelligence)) ]]  - set Math.max = 10 and Math.min = 0
    // / teamAttributeAverages.intelligence);

    console.log("intCompatibilityVal", intCompatibilityVal);


    let weightedIntVal = intCompatibilityVal;
    if (intCompatibilityVal > 0.5) {
        weightedIntVal *= 1.05

        // limit weight to maximum of 1.0
        if (weightedIntVal > 1.0) {
            weightedIntVal = 1.0
        }
    } else if (intCompatibilityVal < 0.5) {
        weightedIntVal *= .95
        // limit weight to minimum of 0.0
        if (weightedIntVal < 0.0) {
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

function calculateCompatibilityPerAttribute() {
    return null;
}


/*
    't' : 'teamAvgAttrs'
    'a' : 'applicants'
*/
function calculateApplicantCompatibility(t, a) {
    let overallCompatibilityPoints = 0; // Will take average to calculate final score
    let numberOfAttributes = 0;
    
    // Loop through the applicant's attributes to calculate compatibility points.
    for (const attr in a.attributes) {
        const aAttrValue = a.attributes[attr]; // Checking for existance of attribute
        const baseValue = 0.5;
        const maxValue = 1;
        const minValue = 0;

        // Calculate the compatibility value of an applicant's attribute based on the team's average attribute value.
        // The formula returns 0.5 when the applicant's attribute is equal to the team's average, varying from there.
        let attrCompVal = baseValue * ((t[attr] + (aAttrValue - t[attr])) / t[attr]);        
        
        /*
            Some attributes are more desirable; we've implemented a weighted system.
            The attributeWeights object is imported from "./attributeWeights.mjs".
        */
        if (attrCompVal > baseValue) {
            attrCompVal *= (1 + attributeWeights[attr]);
            attrCompVal = Math.min(attrCompVal, maxValue); // Limit the maximum points for an attribute to 1.
        } else if (attrCompVal < baseValue) {
            attrCompVal *= (1 - attributeWeights[attr]);            
            attrCompVal = Math.max(attrCompVal, minValue); // Limit the minimum points for an attribute to 0.
        }
        
        overallCompatibilityPoints += attrCompVal // Adding to overall points
        numberOfAttributes++; // Counting number of attributes
    }
    
    const score = parseFloat((overallCompatibilityPoints / numberOfAttributes).toFixed(2));

    const result = {
        name : a.name,
        score : score,
    }
    console.log(result);
    return result;

}