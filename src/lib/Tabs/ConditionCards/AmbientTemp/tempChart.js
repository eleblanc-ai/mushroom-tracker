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
        shade: '#06D6A0',
        gradientToColors: ['#06D6A0']
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
        name: 'Temp',
        data: [73.5,74.5,75.6,72.2,70.7,70],
        color: '#EF476F'
      }
    ],
    xaxis: {
      categories: ['14:00', '14:05', '14:10', '14:15', '14:20', '14:25'],
      labels: {
        show: true,
        style: {
          fontFamily: 'Inter, sans-serif',
          cssClass: 'text-xs font-normal dark:text-white fill-gray-500 dark:fill-gray-400'
        }
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      title: {
        text: 'Time (HH:MM)',
        style: {
          fontFamily: 'Inter, sans-serif',
          cssClass: 'text-xs font-normal dark:text-white fill-gray-500 dark:fill-gray-400'

        }
      }
    },
    yaxis: {
      labels: {
        show: true,
        style: {
          fontFamily: 'Inter, sans-serif',
          cssClass: 'text-xs font-normal dark:text-white fill-gray-500 dark:fill-gray-400'
        }
      },
      axisTicks: {
        show: false
      },
      title: {
        text: 'Temperature (°F)',
        style: {
          fontFamily: 'Inter, sans-serif',
          cssClass: 'text-xs font-normal dark:text-white fill-gray-500 dark:fill-gray-400'
        }
      }
    }
  };
