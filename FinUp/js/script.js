const ctx = document.getElementById('lineChart').getContext('2d');

const lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 
            'Maio', 'Junho', 'Julho', 'Agosto', 
            'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ],
        datasets: [
            {
                label: 'Receitas',
                data: [6, 8, 20, 25, 30, 28, 32, 35, 38, 40, 42, 45],
                borderColor: '#00bcd4',
                backgroundColor: 'rgba(0, 188, 212, 0.2)',
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#00bcd4'
            },
            {
                label: 'Despesas',
                data: [4, 6, 16, 18, 20, 22, 24, 25, 28, 30, 31, 33],
                borderColor: '#3f51b5',
                backgroundColor: 'rgba(63, 81, 181, 0.2)',
                fill: true,
                tension: 0.4,
                pointRadius: 4,
                pointBackgroundColor: '#3f51b5'
            }
        ]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#003f4f',
                    font: {
                        size: 14
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 5,
                    color: '#003f4f',
                    font: {
                        size: 12
                    }
                },
                grid: {
                    color: '#ccc'
                }
            },
            x: {
                ticks: {
                    color: '#003f4f',
                    font: {
                        size: 12
                    }
                },
                grid: {
                    color: '#eee'
                }
            }
        }
    }
});
