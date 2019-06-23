export const timeSeriesOptions = {
  options: {
    responsive: true,
    scales: {
      ticks: {
        fontColor: "rgba(255,255,255,.5)"
      },
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
            fontColor: "#fff",
            display: false
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      xAxes: [
        {
          type: "time",
          gridLines: {
            display: false,
            drawBorder: false
          },
          ticks: {
            fontColor: "rgba(255,255,255,.7)",
            display: false
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
      fillStyle: "transparent",
      labels: {
        boxWidth: 5,
        fontColor: "rgba(255,255,255,.5)"
      }
    },
    hover: { mode: true },
    tooltips: {
      callbacks: {
        label: function(tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || "";

          console.log(tooltipItem.yLabel);
          if (label) {
            label += ": ";
          }

          label += Math.round(tooltipItem.yLabel * 100) / 100;
          return label;
        }
      }
    }
  }
};

export const timeSeriesOptionsCallback = callback => {
  return {
    responsive: true,
    scales: {
      ticks: {
        fontColor: "rgba(255,255,255,.5)"
      },
      yAxes: [
        {
          ticks: {
            beginAtZero: false,
            fontColor: "#fff",
            display: false
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
            fontColor: "rgba(255,255,255,.7)",
            display: false
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
      fillStyle: "transparent",
      labels: {
        boxWidth: 5,
        fontColor: "rgba(255,255,255,.5)"
      }
    },
    hover: {
      mode: "nearest",
      intersect: true
    },
    tooltips: {
      mode: "label",
      intersect: false,
      callbacks: {
        label: function(tooltipItem, data) {
          var label = data.datasets[tooltipItem.datasetIndex].label || "";
          callback(tooltipItem.yLabel, tooltipItem.xLabel);
          return label + " " + tooltipItem.yLabel;
        }
      }
    }
  };
};
