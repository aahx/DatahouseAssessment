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
    console.log("---teamAvgAttrs---")
    console.log(teamAvgAttrs);

    console.log("---applicants---");
    console.log(applicants);

    let result = [];

    for (const applicant in applicants) {
        const applicantScore = calculateApplicantCompatibility(teamAvgAttrs, applicants);
        result.push(applicantScore);
        console.log("---in-loop result---");
        console.log(result);
    }

    console.log("--- final result --- ");
    console.log(result);
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
    let overallCompatibilityPoints = 0; // will divide by number of attributes later to get score
    let numberOfAttributes = a.attributes.length; // will this work?

    for (const attr in a.attributes) {
        // This formula calculates a desirability value of an applicant's attribute based on the average value of the attribute for the team 
        // It is set to return 0.5 when applicants attribute is equal to the team's average attribute value and varies from there.
        let attrCompVal = 0.5 * ((t.attr + (a.attr - t.attr)) / t.attr)

        // Some attributes are more desirable, we created a weight system
        // spictyFoodTolerance is not so important
        // but intelligenec is more important
        if (attrCompVal > 0.5) {
            attrCompVal *= (1 + attrWeight[attr]); // multiplying by weight

            // limit maximum points for an to 1
            Math.min(attrCompVal, 1);
        } else if (attrCompVal < 0.5) {
            attrCompVal *= (1 - attrWeight[atrr]);

            // limit minimum points for an attribute to 0
            Math.max(attrCompVal, 0);
        }

        // numberOfAttributes++; // keeping track of number of attributes
    }

    const score = parseFloat(overallCompatibilityPoints / numberOfAttributes).toFixed(1);

    const result = {
        "name" : a.name,
        "score" : score,
    }
    console.log(result);
    return result;
}