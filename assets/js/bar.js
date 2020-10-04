var barPosition = document.getElementById('myHistogram').getContext('2d');

var randomData = [12, 19, 3, 5, 2, 3, ];
var data = [];
var randomLabel = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
var label = [];

var randomBackgroundColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
];
var backgroundColor = [];

plotGraph = () => {
    var myChart = new Chart(barPosition, {
        type: 'bar',
        data: {
            labels: label,
            datasets: [{
                label: 'Bar Chart',
                data: data,
                backgroundColor: backgroundColor,
                // borderColor: borderColor,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

plotGraph();

addItems = () => {
    // alert('item added')
    var itemName = $("#itemName").val();
    var color = $("#color").val();
    var number = $("#number").val();

    data.push(number);
    label.push(itemName);
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
    label = [];
    backgroundColor = [];
    plotGraph();
}

randomize = () => {
    data = randomData;
    label = randomLabel;
    backgroundColor = randomBackgroundColor;
    plotGraph();
}