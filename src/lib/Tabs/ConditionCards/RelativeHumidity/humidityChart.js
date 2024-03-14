export const options = {
    chart: {
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
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 2
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
        name: 'RH',
        data: [86,86.5,87,87.6,87,86],
        color: '#48bfe3'
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
        text: 'Relative Humidity (%)',
        style: {
          fontFamily: 'Inter, sans-serif',
          cssClass: 'text-xs font-normal dark:text-white fill-gray-500 dark:fill-gray-400'
        }
      }
    }
  };
