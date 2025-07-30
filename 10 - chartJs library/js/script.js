const ctx = document.getElementById('myChart').getContext('2d');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: [
      'Farvardin', 'Ordibehesht', 'Khordad', 'Tir',
      'Mordad', 'Shahrivar', 'Mehr', 'Aban',
      'Azar', 'Dey', 'Bahman', 'Esfand'
    ],
    datasets: [
      {
        label: '👥 New Users',
        data: [50, 65, 40, 80, 90, 120, 110, 70, 60, 100, 130, 150],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: 'rgba(54, 162, 235, 1)',
        pointRadius: 4
      },
      {
        label: '💰 Monthly Income (M)',
        data: [5, 7, 4, 8, 10, 13, 12, 9, 6, 11, 14, 16],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        tension: 0.4,
        fill: true,
        pointBackgroundColor: 'rgba(75, 192, 192, 1)',
        pointRadius: 4
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: '📊 Monthly Overview: Users & Income',
        color: '#333',
        font: {
          size: 20,
          weight: 'bold'
        },
        padding: {
          bottom: 20
        }
      },
      legend: {
        labels: {
          color: '#444',
          font: {
            size: 13
          },
          boxWidth: 18
        }
      },
      tooltip: {
        backgroundColor: '#fff',
        titleColor: '#000',
        bodyColor: '#444',
        borderColor: '#ccc',
        borderWidth: 1,
        cornerRadius: 6,
        padding: 10
      }
    },
    scales: {
      x: {
        ticks: {
          color: '#333',
          font: {
            size: 12
          }
        },
        grid: {
          display: false
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: '#333',
          stepSize: 20
        },
        grid: {
          color: '#eee'
        }
      }
    }
  }
});