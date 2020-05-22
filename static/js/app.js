//Load data from json file

d3.json("data/samples.json").then((importedData) => {
    // console.log(importedData);
    const data = importedData;

const samples = Object.values(data.samples);
    // console.log(samples);
const metadata = Object.values(data.metadata);
    // console.log(metadata);
//----------------------------------------------------------------------

//create initial display
//Create dropdown menu options & default dataset
var input_id = "940";
var dropdown = d3.selectAll("#selDataset");

function init() {
    d3.json("data/samples.json").then((importedData) => {
        var samples = importedData.names;
        // console.log(samples);
        samples.forEach((sample) => {
            dropdown.append("option").property("value", sample).text(sample);
    });
    
    buildMetadata();
    buildGraphs();
});
}

init();
//----------------------------------------------------------------------

// Create functions to display dashboard

function buildMetadata() {
    var display_metadata = metadata.filter(sample => sample.id == input_id);
    var response = display_metadata[0];
    // console.log(display_metadata);
    // console.log(response);

    var meta_panel = d3.select("#sample-metadata");
    meta_panel.html("");

    Object.entries(response).forEach(([key, value]) => {
        // console.log(key, value);
        meta_panel.append("h5").text(`${key}: ${value}`);
    });

    buildGauge(response);

};

function buildGauge(r) {
    var wfreq = r.wfreq;
    console.log(wfreq);

    var level = parseFloat(wfreq) * 20;

    var degrees = 180 - level;
    var radius = 0.5;
    var radians = (degrees * Math.PI) / 180;
    var x = radius * Math.cos(radians);
    var y = radius * Math.sin(radians);

    var mainPath = "M -.0 -0.05 L .0 0.05 L ";
    var pathX = String(x);
    var space = " ";
    var pathY = String(y);
    var pathEnd = " Z";
    var path = mainPath.concat(pathX, space, pathY, pathEnd);

    var data = [
        {
            type: "scatter",
            x: [0],
            y: [0],
            marker: { size: 12, color: "850000" },
            showlegend: false, 
            text: level,
            hoverinfo: "text+name"
        },

        {
            values: [50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50/9, 50],
            rotation: 90,
            text: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
            textinfo: "text",
            textposition: "inside",
            marker: {
                colors: [
                    "rgba(10, 120, 22, .5)",
                    "rgba(10, 120, 22, .5)",
                    "rgba(14, 127, 0, .5)",
                    "rgba(110, 154, 22, .5)",
                    "rgba(170, 202, 42, .5)",
                    "rgba(202, 209, 95, .5)",
                    "rgba(210, 206, 145, .5)",
                    "rgba(232, 226, 202, .5)",
                    "rgba(240, 230, 215, .5)",
                    "rgba(255, 255, 255, 0)"
                ]
            },
            labels: ["8-9", "7-8", "6-7", "5-6", "4-5", "3-4", "2-3", "1-2", "0-1", ""],
            hoverinfo: "label",
            hole: 0.5,
            type: "pie",
            showlegend: false
        }
    ];

    var layout = {
        shapes: [
            {
                type: "path",
                path: path,
                fillcolor: "850000",
                line: {
                    color: "850000"
                }
            }
        ],
        title: "<b>Belly Button Washing Frequency</b> <br> Scrubs per week",
        height: 400, 
        width: 400,
        xaxis: {
            zeroline: false,
            showticklabels: false,
            showgrid: false, 
            range: [-1, 1]
        },
        yaxis: {
            zeroline: false,
            showticklabels: false,
            showgrid: false, 
            range: [-1, 1]
        }
    };

    var Gauge = document.getElementById("gauge");
    Plotly.newPlot(Gauge, data, layout);
};


function buildGraphs() {  

    // Build Bar Graph
    var this_sample = samples.filter(sample => sample.id == input_id);
    console.log(this_sample);

    var display_sample = this_sample[0]

    var sample_otu = display_sample.otu_ids;
    var sample_values = display_sample.sample_values;
    var top_otu = sample_otu.slice(0, 10);
    var top_values = sample_values.slice(0, 10);
    // console.log("sample: ", top_otu);
    // console.log("values: ", top_values);
    // console.log(right_order);
    var yticks = top_otu.map(otu_id => `OTU ${otu_id}`).reverse();
    // console.log("yticks: " + yticks);

    var barData = {
        x: top_values.reverse(),
        y: yticks,
        text: "count",
        type: "bar",
        orientation: "h"
    };

    var graph_data = [barData];

    var layout = {
        title: "Most Common Human Navel Microbes",
        xaxis: {title: 'microbe frequency'},
        yaxis: {title: 'microbe'},
        margin: {
            l: 110,
            r: 50,
            t: 50,
            b: 75
          }
        };

    Plotly.newPlot("bar", graph_data, layout);
    //-----------------------------------------------------------------

    // Build Bubble Chart
    var sample_labels = display_sample.otu_labels;
    // console.log(sample_otu, sample_values, sample_labels);

    var bubbleLayout = {
        margin: {
            l: 75,
            r: 50,
            t: 50,
            b: 75
        },
        hovermode: "closest",
        xaxis: { 
            title: "OTU ID"
            // range: [0, 3500] 
        },
        yaxis: { title: "Frequency in Sample"}
    };

    var bubbleData = [
        {
            x: sample_otu,
            y: sample_values,
            text: sample_labels,
            mode: "markers",
            marker: {
                size: sample_values,
                color: sample_otu,
                colorscale: "Earth"
            }
    }
];

    Plotly.newPlot("bubble", bubbleData, bubbleLayout);

};
//-------------------------------------------------------------

//Create function to update Dashboard from dropdown
dropdown.on("change", updateDashboard);

function updateDashboard() {
    input_id = d3.select("#selDataset").property("value");
    // console.log(input_id);

    buildMetadata();
    buildGraphs();
};
   
});
    
