export const options = {
    chart: {
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800,
        animateGradually: {
            enabled: true,
            delay: 50
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
       },
      height: '240px',
      maxWidth: '100%',
      type: 'area',
      fontFamily: 'Inter, sans-serif',
      dropShadow: {
        enabled: false
      },
      toolbar: {
        show: false
      }
    },
    tooltip: {
      enabled: true,
      x: {
        show: false
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        // set this in condition card
        shade: '',
        // set this in condition card
        gradientToColors: []
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 6
    },
    grid: {
      show: false,
      strokeDashArray: 1,
      padding: {
        left: 20,
        right: 4,
        top: 0
      }
    },
    series: [
      {
        // set this in condition card
        name: '',
        // set this in condition card
        data: [],
        // set this in condition card
        color: ''
      }
    ],
    xaxis: {
      // set this in condition card
      categories: [],
      labels: {
        show: true,
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      title: {
        // set this in condition card
        text: '',
      }
    },
    yaxis: {
      labels: {
        show: true,
      },
      axisTicks: {
        show: false
      },
      title: {
        // set this in condition card
        text: '',
      }
    }
  };

export const style= {
    fontFamily: 'Inter, sans-serif',
    cssClass: 'text-xs font-normal dark:text-white fill-gray-500 dark:fill-gray-400'
};
