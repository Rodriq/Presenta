var piePosition = document.getElementById('myPie').getContext('2d');

var randomLabels = ["Africa", "Asia", "Europe", "Latin America", "North America"];
var labels = [];

var randomBackgroundColor = ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"];
var backgroundColor = [];

var randomData = [2478, 5267, 734, 784, 433];
var data = [];

plotGraph = () => {
    new Chart(piePosition, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: "Label Description",
                backgroundColor: backgroundColor,
                data: data
            }]
        },
        options: {
            title: {
                display: true,
                text: 'Pie Chart'
            }
        }
    });
}

plotGraph();

addItems = () => {
    // alert('item added')
    var label = $("#itemName").val();
    var color = $("#color").val();
    var number = $("#number").val();

    data.push(number);
    labels.push(label);
    backgroundColor.push(color)
    plotGraph();
    // alert(color, number);
    $("#itemName").val('');
    $("#color").val('');
    $("#number").val('');
    $("#showButton").click();
}

clearGraph = () => {
    data = [];
    labels = [];
    backgroundColor = [];
    plotGraph();
}

randomize = () => {
    data = randomData;
    labels = randomLabels;
    backgroundColor = randomBackgroundColor;
    plotGraph();
}