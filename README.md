# Compatibility Calculator

The compatibility Calacultor is a JavaScript applications that calculates compatibility scores  of applicants and an existing team based on their attributes and a set of attribute weights.

### Overview:

1. Extracts team and applicant data from the input file.
2. Calculates average of each attribute for current team.
3. Uses a compatibility algorithm to calculate compatibility scores for each applicant.
4. Returns compatibility scores.


### How the Compatibility Algorithm Works

1. **Input Data:**
    - The algorithm takes two sets of data:
        - **Team Average Attributes:** 
            - The average attribute values for the current team.
        - **List of Applicants:** 

2. **Calculation Steps:**
    - For each applicant:
        - **Attribute Compatibility Calculation:**
            - It compares each attribute of the applicant with the team's average attribute value.
            - A compatibility value is calculated for each attribute based on how close or different the applicant's attribute is from the team's average.
        - **Attribute Weighting:** 
            - Some attributes may be more important than others. We use a weighted system to adjust the compatibility value for each attribute.
            - Attributes that make an applicant a better fit receive a boost, while attributes that don't match as well receive a reduction in score.
        - **Limiting the Score:** 
            - The compatibility score for each attribute is limited to a range between 0 and 1.
        - **Overall Compatibility Score:** 
            - The compatibility scores for all attributes are combined to calculate an overall compatibility score for the applicant.

3. **Repeat for Each Applicant:**
    - These steps are repeated for each applicant in the list.

4. **Output:**
    - The algorithm assigns a compatibility score to each applicant on a scale from 0.00 (significantly mismatched with the team) to 1.00 (a highly positive addition), with 0.50 indicating an average match with the team's attributes.

5. **Result:**
    - The results include a list of compatibility scores for all applicants, which can be used to make informed decisions about which applicants are the best fit for the team.