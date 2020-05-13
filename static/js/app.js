d3.json("data/samples.json").then((importedData) => {
    console.log(importedData);
    var data = importedData;

});

// -------------------------------------------------------------
// //CALCULATE FREQUENCY OF OTU_IDs

//  // Sort the data array using the greekSearchResults value
//  data.sort(function(a, b) {
//     return parseFloat(b.otu_frequency) - parseFloat(a.otu_frequency);
//   });

// // OR var sortedByGreekSearch = data.sort((a, b) => b.greekSearchResults - a.greekSearchResults);
// ............................................................................
// data = data.slice(0, 10);
// slicedData = sortedByGreekSearch.slice(0, 10);

// data = data.reverse();
// reversedData = slicedData.reverse();


// // var trace1 = {
// //     x: data.map(row => row.greekSearchResults),
// //     y: data.map(row => row.greekName),
// //     text: data.map(row => row.greekName),
// //     name: "Greek",
// //     type: "bar",
// //     orientation: "h"
// //   };

// //   var chartData = [trace1];

// //   var layout = {
// //     title: "Greek gods search results",
// //     margin: {
// //       l: 100,
// //       r: 100,
// //       t: 100,
// //       b: 100
// //     }
// //   };

// //   Plotly.newPlot("plot", chartData, layout);
