// grafica.js
document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('miGrafica').getContext('2d');

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Serie 1',
                    data: [3.5, 3, 4.5, 2.5, 7, 1.5],
                    backgroundColor: '#2f4f4f'
                },
                {
                    label: 'Serie 2',
                    data: [1.5, 4, 2, 2, 0, 4.5],
                    backgroundColor: '#d4af37'
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false }, // Oculta la leyenda
            },
            scales: {
                x: {
                    stacked: true, // Apila las barras en el eje X
                },
                y: {
                    stacked: true, // Apila las barras en el eje Y
                    beginAtZero: true,
                    ticks: { stepSize: 1 }
                }
            }
        }
    });
});
// grafica_dona.js

document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('graficaDona').getContext('2d');

    // Crear gráfico de dona
    const grafica = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['A', 'B', 'C', 'D'],
            datasets: [{
                data: [25, 35, 20, 20],
                backgroundColor: [
                    '#2f4f4f', // verde oscuro
                    '#1f9db3', // turquesa
                    '#1b7bb8', // azul
                    '#d4af37'  // dorado
                ],
                borderWidth: 0
            }]
        },
        options: {
            cutout: '70%', // grosor del anillo
            plugins: {
                legend: { display: false }, // sin leyenda
                tooltip: { enabled: false } // sin tooltip
            }
        }
    });

    // Agregar texto centrado dentro de la dona
    Chart.register({
        id: 'textCenter',
        beforeDraw(chart) {
            const { width, height, ctx } = chart;
            ctx.save();
            ctx.font = '16px Arial';
            ctx.fillStyle = '#556b6b';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('Flight Share', width / 2, height / 2);
            ctx.restore();
        }
    });
});
// grafica_lineas.js

document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById('graficaLineas').getContext('2d');

    // Crear degradado para fondo
    const gradient = ctx.createLinearGradient(0, 0, 0, 300);
    gradient.addColorStop(0, 'rgba(244, 238, 224, 0.4)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [
                {
                    label: 'Pasajeros',
                    data: [3, 2, 3.5, 2, 4, 5],
                    borderColor: '#2f4f4f',
                    backgroundColor: gradient,
                    fill: true,
                    tension: 0.4,
                    pointBackgroundColor: '#2f4f4f',
                    pointRadius: 5,
                    pointHoverRadius: 7,
                },
                {
                    label: 'Vuelos',
                    data: [2, 3, 2.5, 3, 5.5, 4.5],
                    borderColor: '#d4af37',
                    backgroundColor: 'transparent',
                    fill: false,
                    tension: 0.4,
                    pointBackgroundColor: '#d4af37',
                    pointRadius: 5,
                    pointHoverRadius: 7,
                }
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: '#2f4f4f',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    displayColors: false,
                    callbacks: {
                        title: function() { return '3500'; },
                        label: function() { return 'Pessangers'; }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false }
                },
                y: {
                    beginAtZero: true,
                    max: 6,
                    ticks: { stepSize: 1 },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                }
            }
        }
    });
});
