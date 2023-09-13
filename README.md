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
        - **List of Applicants** 

2. **Calculate Team's Average Attribute Value**:
    - Determine the average attribute values for the team by summing attribute values across team members and dividing by the number of members.

3. **Calculation Steps:**
    - For each applicant:
        - **Attribute Compatibility Calculation:**
            - It compares each attribute of the applicant with the team's average attribute value.
            - <em>A compatibility value is calculated for each attribute based on how close or different the applicant's attribute is from the team's average.</em>
        - **Attribute Weighting:** 
            - Some attributes may be more important than others. We use a weighted system to adjust the compatibility value for each attribute.
            - Attributes that make an applicant a better fit receive a boost, while attributes that don't match as well receive a reduction in score.
        - **Limiting the Score:** 
            - The compatibility score for each attribute is limited to a range between 0 and 1.
        - **Overall Compatibility Score:** 
            - The compatibility scores for all attributes are combined to calculate an overall compatibility score for the applicant.

4. **Repeat for Each Applicant:**
    - These steps are repeated for each applicant in the list.

5. **Output:**
    - The algorithm assigns a compatibility score to each applicant on a scale from 0.00 (significantly mismatched with the team) to 1.00 (a highly positive addition), with 0.50 indicating an average match with the team's attributes.

6. **Result:**
    - The algorithm generates compatibility scores for each applicant and returns them as a structured JSON object, making it easy to assess and compare applicants for team selection.