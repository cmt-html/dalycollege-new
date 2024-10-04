var options = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48],
    },
  ],
  chart: {
    type: "bar",
    height: 350,
  },
  colors: ["#1A48ED", "#86F4F4", "#25B7AD"],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
      endingShape: "rounded",
    },
  },

  legend: {
    position: "top",
    horizontalAlign: "left",
    fontSize: "18px",
    fontFamily: "metropolissemi_bold",
    fontWeight: 500,
  },

  dataLabels: {
    enabled: false,
  },

  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
  },
  xaxis: {
    categories: ["Jun", "July", "Aug", "Sept", "Oct", "Nov"],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

var options = {
  exportEnabled: true,
  animationEnabled: true,

  legend: {
    horizontalAlign: "bottom",
    verticalAlign: "bottom",
  },

  data: [
    {
      colorSet: "greenShades",

      // showInLegend: true,
      toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
      indexLabel: "{name}",
      legendText: "{name} (#percent%)",
      indexLabelPlacement: "inside",
      indexLabelFontSize: 20,
      color: "LightSeaGreen",
      indexLabelFontColor: "#fff",
      showInLegend: true,
      legend: {
        fontColor: "#fff",
      },
      type: "pie",
      dataPoints: [
        { y: 36, indexLabel: "25%", legendText: "Apple", color: "#D8FFCA" },
        { y: 17, indexLabel: "42%", legendText: "Mango", color: "#1C3180" },
        { y: 16, indexLabel: "67%", legendText: "Orange", color: "#04ADA3" },
        { y: 17, indexLabel: "42%", legendText: "Mango", color: "#72CAC5" },
        { y: 16, indexLabel: "67%", legendText: "Orange", color: "#04ADA3" },
      ],
    },
  ],
};

$("#chartContainer1").CanvasJSChart(options);
