export const earningsOptions = {
  options: {
    scales: {
      ticks: {
        fontColor: "rgba(255,255,255,.5)"
      },
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
            fontColor: "#fff"
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            fontColor: "rgba(255,255,255,.7)"
          }
        }
      ]
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }
    },
    legend: {
      display: false,
      labels: {
        boxWidth: 1,
        fontColor: "rgba(255,255,255,.5)"
      }
    }
  }
};
