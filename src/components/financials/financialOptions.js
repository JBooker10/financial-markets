export const financialOptions = {
    options: {
            scales: {
                ticks: {
                    fontColor: 'rgba(255,255,255,.5)' 
                },
       yAxes: [{
           ticks: {
               beginAtZero:true,
               fontColor: '#fff',
               display:false
           },
           gridLines: {
               display: false,
               drawBorder: false,
             }
       }],
       xAxes: [{
         gridLines: {
             display: false,
             drawBorder: false,
           },
           ticks: {
            fontColor: 'rgba(255,255,255,.7)'
        }
       }]
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
    labels: { 
        boxWidth: 1,
        fontColor: 'rgba(255,255,255,.5)' 
      }
    }
}

};