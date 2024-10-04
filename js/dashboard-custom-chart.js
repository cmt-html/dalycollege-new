// window.onload = function () {
//   CanvasJS.addColorSet("greenShades", [
//     //colorSet Array
//     "#F26522",
//     "#DF0D00",
//     "#FFDA59",
//     "#00895D",
//     "#1C3180",
//   ]);

//   var chart = new CanvasJS.Chart("chartContainer", {
//     colorSet: "greenShades",
//     animationEnabled: true,

//     data: [
//       {
//         type: "bar",
//         toolTipContent: "",
//         dataPoints: [
//           { label: "Revision Requested", y: 50 },
//           { label: "Fee Mandate Rejected", y: 10 },
//           { label: "Fee Mandate Approval Pending", y: 80 },
//           { label: "Fee Mandate Accepted", y: 200 },
//           { label: "Fee Mandate Created", y: 300 },
//         ],
//       },
//     ],
//   });
//   chart.render();
// };

// Create the data object
const data = {
  labels: [
    "Fee Mandate Created",
    "Fee Mandate Accepted",
    "Fee Mandate Approval Pending",
    "Fee Mandate Rejected",
    "Revision Requested",
  ],
  datasets: [
    {
      label: "", // Set dataset label as blank
      data: [750, 550, 190, 20, 80],
      backgroundColor: ["#1C3180", "#00895D", "#FFDA59", "#DF0D00", "#F26522"],
      borderColor: "rgba(0, 0, 0, 0)", // Set border color to transparent
      borderWidth: 0, // Set border width to 0
    },
  ],
};

// Set up the chart configuration
const config = {
  type: "bar", // Keep type as 'bar' for horizontal chart
  data: data,
  options: {
    responsive: true,
    indexAxis: "y", // Change axis direction (horizontal)
    scales: {
      x: {
        // X-axis settings
        beginAtZero: true,
        min: 0, // Set minimum value for X-axis
        max: 1000, // Set maximum value for X-axis
        ticks: {
          stepSize: 100, // Set increment for X-axis
        },
      },
      y: {
        // Y-axis settings
        ticks: {
          align: "start", // Align y-axis labels to the start (left)
        },
        grid: {
          display: false, // Disable horizontal grid lines
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  },
};

// Get the context of the canvas
const ctx = document.getElementById("chartContainer").getContext("2d");

// Create the chart
const myHorizontalBarChart = new Chart(ctx, config);

// // Create the data object
// const data = {
//   labels: [
//     "Fee Mandate Created",
//     "Fee Mandate Accepted",
//     "Fee Mandate Approval Pending",
//     "Fee Mandate Rejected",
//     "Revision Requested",
//   ],
//   datasets: [
//     {
//       label: "", // Set label as blank
//       data: [750, 550, 190, 20, 80],
//       backgroundColor: ["#1C3180", "#00895D", "#FFDA59", "#DF0D00", "#F26522"],
//       //   borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
//     //   backgroundColor: "transparent", // Remove background color
//       borderColor: "transparent", // Remove border color
//       borderWidth: 0, // Set border width to 0
//     },
//   ],
// };

// // Set up the chart configuration
// const config = {
//   type: "bar", // Keep type as 'bar' for horizontal chart
//   data: data,
//   options: {
//     responsive: true,
//     indexAxis: "y", // Change axis direction (horizontal)
//     scales: {
//       x: {
//         // X-axis settings
//         beginAtZero: true,
//         min: 0, // Set minimum value for X-axis
//         max: 1000, // Set maximum value for X-axis
//         ticks: {
//           stepSize: 100, // Set increment for X-axis
//         },
//       },
//       y: {
//         // Y-axis settings
//         grid: {
//           display: true, // Optional: Display grid lines on the y-axis
//         },
//         ticks: {
//           align: "start", // Align y-axis labels to the start (left)
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         display: true, // Show the legend
//       },
//     },
//   },
// };

// // Get the context of the canvas
// const ctx = document.getElementById("chartContainer").getContext("2d");

// // Create the chart
// const myHorizontalBarChart = new Chart(ctx, config);
