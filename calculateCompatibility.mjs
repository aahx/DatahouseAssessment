import attributeWeights from "./attributeWeights.mjs";


export function compatibilityCalculator(teamAvgAttrs, applicants) {
    let result = [];
    
    // Looping through each applicant to calculate score obj and pushing to result
    for (const applicant of applicants) {        
        const applicantScore = calculateApplicantCompatibility(teamAvgAttrs, applicant);
        result.push(applicantScore);
    }

    console.log("--- final result --- ");
    console.log(result);
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

    return result;
}