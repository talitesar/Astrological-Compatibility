var options = data.signs

for (let i=0;i<options.length;i++){
    d3.select('#selDataset1').append('option').text(options[i]).attr("value",options[i])
};

for (let i=0;i<options.length;i++){
    d3.select('#selDataset2').append('option').text(options[i]).attr("value",options[i])
};

var initSign1 = options[0]
var initSign2 = options[0]

function compatLookup(sign1, sign2) {

    for (let i=0;i<data.metadata.length;i++){
        if (data.metadata[i].zodiac1 == sign1 && data.metadata[i].zodiac2==sign2) {
            var compatRating = data.metadata[i].Compatibility_rate
        }
    }

    return compatRating
};

function outcomeLookup(sign1, sign2) {

    for (let i=0;i<data.metadata.length;i++){
        if (data.metadata[i].zodiac1 == sign1 && data.metadata[i].zodiac2==sign2) {
            var outcome = data.metadata[i].bad_match
        }
    }

    return outcome
};


function initGauge() {
    var gauge = [

        {
          domain: { x: [0, 1], y: [0, 1] },
          value: compatLookup(initSign1, initSign2),
          title: { text: "Astrological Combatility Rating" },
          type: "indicator",
          mode: "gauge+number",
          delta: { reference: 400 },
          gauge: { axis: { range: [0, 100] } }
        }
      ];

      var layout = { width: 600, height: 400 };
      
      Plotly.newPlot('gauge', gauge, layout);
      
};

initGauge();

d3.selectAll("#selDataset1").on("change",newData1);

function newData1() {
    let newSign1 = d3.select("#selDataset1").property("value");
    let newSign2 = d3.select("#selDataset2").property("value");

    let value = compatLookup(newSign1, newSign2);
    let match = outcomeLookup(newSign1, newSign2);

    if (match==1) {d3.select("#outcome").text("Sorry, you're not meant to be.")} 
    else {d3.select("#outcome").text("You're going to last forever!")};

    updateGauge1(value)
};

function updateGauge1(value) {
    Plotly.restyle("gauge", "value", [value])
};

d3.selectAll("#selDataset2").on("change",newData2);

function newData2() {
    let newSign1 = d3.select("#selDataset1").property("value");
    let newSign2 = d3.select("#selDataset2").property("value");

    let value = compatLookup(newSign1, newSign2);
    let match = outcomeLookup(newSign1, newSign2);

    if (match==1) {d3.select("#outcome").text("Sorry, you're not meant to be.")} 
    else {d3.select("#outcome").text("You're going to last forever!")};

    updateGauge2(value)
};

function updateGauge2(value) {
    Plotly.restyle("gauge", "value", [value])
};