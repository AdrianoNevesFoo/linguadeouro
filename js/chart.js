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
    draw("#chartBijay", [30000, 40000, 30000, 50000, 50000, 45000]);
    draw("#chartNeylor", [30000, 35000, 45000, 45000, 50000, 50000]);
    draw("#chartThales", [50000, 35000, 45000, 45000, 50000, 45000]);
    draw("#chartWescley", [50000, 0, 0, 50000, 0, 50000]);
    draw("#chartTiago", [30000, 40000, 30000, 40000, 30000, 45000]);
    draw("#chartDenis", [49000, 40000, 10000, 0, 0, 100]);
    draw("#chartJe", [10000, 45000, 30000, 10000, 0, 30000]);
    draw("#chartRodrigo", [4000, 40000, 40000, 0, 10000, 10000]);
    draw("#chartFabio", [3000, 0, 0, 40000, 0, 0]);
    draw("#chartRicardo", [40000, 35000, 45000, 50000, 0, 40000]);


});

// 'Conversa Fiada', 'Técnica', 'Tática', 'Cachaça',
//                     'Churrasqueira', 'Parceria'