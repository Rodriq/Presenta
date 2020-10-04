var linePosition = document.getElementById('myLine').getContext('2d');

var randomData = [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478];
var data = [];
var randomLabels = [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050];
var labels = [];

plotGraph = () => {
    var myLineChart = new Chart(linePosition, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                label: "Lable",
                borderColor: "#3e95cd",
                fill: false
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Line Graph'
            }
        }
    });
}

plotGraph();

randomize = () => {
    data = randomData;
    labels = randomLabels;
    plotGraph();

}

clearGraph = () => {
    data = [];
    label = [];
    backgroundColor = [];
    plotGraph();
}

addItems = () => {
    var newData = $("#data").val();
    var newNumber = $("#number").val();

    data.push(newData);
    labels.push(newNumber);
    plotGraph();

    $("#data").val('');
    $("#number").val('');
    $("#showButton").click();

}