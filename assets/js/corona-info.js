var piePosition = document.getElementById('pieChart').getContext('2d');
var barPosition = document.getElementById('barChart').getContext('2d');
// var linePosition = document.getElementById('lineChart').getContext('2d');


getCountryStatus = (status, country) => {
    axios.get(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats?country=Cameroon`, {
        headers: {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": "d791374ee2mshc0ca27b5319d57fp1d7ac4jsncb7f92a90bce",
            "useQueryString": true
        }
    }).then(response => {
        console.log(response);
        console.log("*********");
        // return (response.data)
    });
}
getCoronaResult = () => {
    var barLabel = ["Confirmed", "Deaths", "Recovered"]
    var backgroundColors = ['rgba(0, 0, 250, 0.8)',
        'rgba(250, 0, 0, 0.8)',
        'rgba(0, 250, 0, 0.8)',
    ];
    axios.get(`https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total`, {
        headers: {
            "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
            "x-rapidapi-key": "d791374ee2mshc0ca27b5319d57fp1d7ac4jsncb7f92a90bce",
            "useQueryString": true
        }
    }).then(response => {
        // console.log(response);
        worldData = response.data.data;
        barLabel = ["Confirmed", "Deaths", "Recovered"];
        console.log(worldData, "*********");
        var barData = [worldData.confirmed, worldData.deaths, worldData.recovered]
        plotBarGraph(barData, barLabel, backgroundColors);
        plotPieGraph(barData, barLabel, backgroundColors);
    });
}

getCoronaResult();

callAlert = (val) => {
        alert(val)
    }
    // alert("ooooooooooooooooooooooooooooo");


plotBarGraph = (data, label, colors) => {
    var myChart = new Chart(barPosition, {
        type: 'bar',
        data: {
            labels: label,
            datasets: [{
                label: 'WorldWide Corona Virus Status on Bar Chart',
                data: data,
                backgroundColor: colors,
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

plotPieGraph = (data, label, colors) => {
    new Chart(piePosition, {
        type: 'pie',
        data: {
            labels: label,
            datasets: [{
                label: "Recent Updates",
                backgroundColor: colors,
                data: data
            }]
        },
        options: {
            title: {
                display: true,
                text: 'WorldWide Corona Virus Status on Bar Chart'
            }
        }
    });
}