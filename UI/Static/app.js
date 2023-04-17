var options = data.signs

for (let i=0;i<options.length;i++){
    d3.select('#selDataset1').append('option').text(options[i]).attr("value",options[i])
};

for (let i=0;i<options.length;i++){
    d3.select('#selDataset2').append('option').text(options[i]).attr("value",options[i])
};

var initSign = options[0]

function initGauge() {

}

