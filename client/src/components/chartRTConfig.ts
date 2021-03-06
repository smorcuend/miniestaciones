export default {
  chart: {
    id: 'chart',
    height: 450,
    type: 'area',
    animations: {
      enabled: true,
      easing: 'linear',
      initialAnimation: {
        enabled: true,
      },
      dynamicAnimation: {
        speed: 1000,
      },
    },
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: true
  },
  stroke: {
    curve: 'smooth',
  },
  title: {
    text: 'Título no definido',
    align: 'left',
  },
  tooltip: {
    x: {
      format: 'dd/MM HH:mm'
    }
  },
  markers: {
    size: 0,
  },
  xaxis: {
    type: 'datetime',
    // range: XAXISRANGE,
  },
  yaxis: {
    min: 0,
    max: 100,
  },
  legend: {
    show: false,
  },
};
