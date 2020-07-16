# The Belly Button Biodicersity Dashboard
This project was an exercise in building a dashboard using the JavaScript D3 and Plotly libraries. The resulting product is an interactive dashboard to explore the [Belly Button Biodiversity dataset](http://robdunnlab.com/projects/belly-button-biodiversity/), which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare. Data for each sample in the original dataset is read from `data/samples.json` into the Plotly graphs and data panels via the D3 library. 

## Dashboard Components
1. a dropdown menu that allows the user to chose the sample number for which they want to see data
2. a panel displaying the metadata demographic information for the individual from whom chosen sample was taken:
3. a Plotly bar chart
4. a Plotly bubble chart 
5. a Plotly gauge graphic to display the "wash frequency", i.e. the number of times per dat that individual washed their navel.
