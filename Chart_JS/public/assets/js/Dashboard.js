var linea = document.getElementById("lineas");
var myPieChart = new Chart(linea, {
    type: "line",
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [
            {
                hoverRadius: 12,
                label: "Herramientas Solicitadas",
                data: [30, 38, 76, 28, 47, 49],
                fill: false,
                borderColor: 'rgba(254, 233, 0, 0.8)'
            },
            {
                label: "Materiales Solicitados",
                data: [12, 20, 38, 23, 19, 72],
                fill: false,
                borderColor: 'rgba(254, 0, 0, 0.8)'
            },
            {
                label: "Equipos Solicitados",
                data: [6, 3, 12, 6, 60, 5],
                fill: false,
                borderColor: 'rgba(0, 0, 254, 0.8)'
            }
        ]
    },
    options: {
        legend: {display: false}  
    }
}); 


$(document).ready(function() {
    
})


