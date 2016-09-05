$(function () {

    $('#container').highcharts({

        chart: {
            polar: true,
            type: 'line'
        },

        title: {
            text: 'Mapa de Habilidades',
            x: -80
        },

        pane: {
            size: '80%'
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
            align: 'right',
            verticalAlign: 'top',
            y: 70,
            layout: 'vertical'
        },

        series: [{
            name: 'Habilidades do jogador',
            data: [70000, 30000, 45000, 45000, 50000, 50000],
            pointPlacement: 'on'
        }, {
            name: 'Medida máxima de referência',
            data: [50000, 50000, 50000, 50000, 50000, 50000],
            pointPlacement: 'on'
        }]

    });
});