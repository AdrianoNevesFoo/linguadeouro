function draw(id, vector){
    $(id).highcharts({

        chart: {
            polar: true,
            type: 'line',
            width: 700,
            margin: [10, 10, 40, 10]
        },

        title: {
            text: '',
            x: -80
        },

        exporting: {
            enabled: false,
        },

        credits: {
            enabled: false,
        },

        xAxis: {
            categories: ['Conversa Fiada', 'Técnica', 'Tática', 'Cachaça',
                    'Churrasqueira', 'Parceria'],
            tickmarkPlacement: 'on',
            lineWidth: 0
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            lineWidth: 0,
            min: 0
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
        },

        legend: {
            align: 'center',
            verticalAlign: 'bottom',
            width: 500
        },

        series: [{
            name: 'Habilidades do jogador',
            data: vector,
            pointPlacement: 'on'
        }, {
            name: 'Medida máxima de referência',
            data: [50000, 50000, 50000, 50000, 50000, 50000],
            pointPlacement: 'on'
        }]

    });
}
$(document).ready(function () {
    draw("#chartBijay", [10000, 10000, 10000, 10000, 10000, 10000]);
    draw("#chartNeylor", [10000, 10000, 10000, 10000, 10000, 10000]);
    draw("#chartThales", [10000, 10000, 10000, 10000, 10000, 10000]);
    draw("#chartWescley", [10000, 10000, 10000, 10000, 10000, 10000]);
    draw("#chartTiago", [10000, 10000, 10000, 10000, 10000, 10000]);
    draw("#chartDenis", [10000, 10000, 10000, 10000, 10000, 10000]);
    draw("#chartJe", [10000, 10000, 10000, 10000, 10000, 10000]);
    draw("#chartRodrigo", [10000, 10000, 10000, 10000, 10000, 10000]);
    draw("#chartFabio", [10000, 10000, 10000, 10000, 10000, 10000]);
    draw("#chartRicardo", [10000, 10000, 10000, 10000, 10000, 10000]);


});