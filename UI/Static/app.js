var options = data.signs

for (let i=0;i<options.length;i++){
    d3.select('#selDataset1').append('option').text(options[i]).attr("value",options[i])
};

for (let i=0;i<options.length;i++){
    d3.select('#selDataset2').append('option').text(options[i]).attr("value",options[i])
};

var initSign = options[0]

function initOutcome() {

}

function initGauge() {
    var gauge = [

        {
          domain: { x: [0, 1], y: [0, 1] },
          value: data.,
          title: { text: "Combatility Rating" },
          type: "indicator",
          mode: "gauge+number",
          delta: { reference: 400 },
          gauge: { axis: { range: [0, 100] } }
        }
      ];

      var layout = { width: 600, height: 400 };
      
      Plotly.newPlot('myDiv', data, layout);
}
