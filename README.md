### The Idea for Logic:
- Find average value for each attribute for the team.
- Compare the team average value of attributes to candidate's attribute value.

<br/>

- If candidate's attribute value is greater than team's average, he is more compatible.
- If candidate's attribute value is less than team's average, he is less compatible.
- If candidate's attribute is same as team's average -> base case // 5.0 ?

###### Extra - Make attributes weighted.
- Comparison of spicyFoodTolerance is less important than comparison of intelligence.




### Initial Idea on How to Organize Main Function

```
    function processInput(input)
    --> separate input to
            var teams
            var applicants

                                        // located in separate module
    --> const teamAttributeAverages =   function teamAttributeAverages(teams)

    --> import teamAttributeWeights;    
        // hide in calculateCompatibility function? 
        // instead of hiding it in calculateCompatibilityScore, let's bring it in here,
            then pass it along to calculateCompatibilityScore, so we can have a better idea of 
            how it works from the onset of reading this main function.

    --> const compatibilityScores = 
            function calculateCompatibilityScore(
                teamAttributeAverages,
                teamAttributeWeights,
                applicants);

        // let's format the output in another separate module
    --> const output = formatOut(comaptibilityScores); 
    
            --> function(compatibilityScores) {
                    return {
                        "scoredApplicants" : [
                            compatbilityScores
                        ]
                    }
                }

    --> return output
//

processInput(input);
```