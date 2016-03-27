/* chart utils */

/**
 * Create the chart when all data is loaded
 * @returns {undefined}
 */
function createChart(containerID) {

    $("#" + containerID).highcharts('StockChart', {
            rangeSelector: {
                selected: 4
    },

        yAxis: {
            labels: {
                formatter: function () {
                    return (this.value > 0 ? ' + ' : '') + this.value + '%';
                }
            },
            plotLines: [{
                value: 0,
                width: 2,
                color: 'silver'
            }]
        },

        plotOptions: {
            series: {
                compare: 'percent'
            }
        },

        tooltip: {
            pointFormat: '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
            valueDecimals: 2
        },
            
       chart: {
        type: 'line'
    },

        series: []
    });
}

function addSeries(containerID, name, data){
    var chart =  $("#" + containerID).highcharts();
    chart.addSeries({                        
        name: name,
        data: data
    });
}

function cleanChart(containerID){
    var chart =  $("#" + containerID).highcharts();
    while(chart.series.length > 0)
        chart.series[0].remove(true);
}