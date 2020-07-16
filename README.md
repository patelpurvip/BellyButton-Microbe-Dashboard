# The Belly Button Biodiversity Dashboard
This project was an exercise in dashboard-building using the JavaScript D3 and Plotly libraries. The resulting product is an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

## Background
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare. Data for each sample in the original dataset are read from `data/samples.json` into the Plotly graphs and data panels via the D3 library. 

## Dashboard Components
1. a dropdown menu that allows the user to chose the sample number for which they want to see data

2. a panel displaying the metadata demographic information for the individual from whom chosen sample was taken:
    * Sample ID
    * ethnicity of the person donating the sample
    * the individual's gender
    * the individual's age
    * the location the sample was taken
    * belly button type (i.e. "innie" or "outie")
    * the wash frequency of the belly button

3. a Plotly horizontal bar chart displaying the frequency of 10 most common OTUs present in the chosen sample

4. a Plotly bubble chart displaying all OTUs in the sample, where both the y-axis position and the size of the bubble indicate the frequency of each OTU, thus making the relative proportion of each OTU in the sample easier to see. OTU id numbers are also used to group the bubbles by color to differentiate the values a bit. 

5. a Plotly gauge graphic to display the "wash frequency", i.e. the number of times per day that sample donors washed their navel

## Deployment
The final [Dashboard](https://patelpurvip.github.io/JS-Plotly-challenge/) has been deployed via Github Pages.

### About the Data
Hulcr, J. et al.(2012) _A Jungle in There: Bacteria in Belly Buttons are Highly Diverse, but Predictable_. Retrieved from: [http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/](http://robdunnlab.com/projects/belly-button-biodiversity/results-and-data/)