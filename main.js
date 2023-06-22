const xValues = ['Electronics', 'Food', 'Furniture', 'Cars and accessories', 'Others']
const yValues = [60, 20, 30, 10, 25]
const barColors = [
    "rgba(1,22,39,.3)",
    "rgba(255, 51, 102, .3",
    "rgba(46, 196, 182, .3)",
    "rgba(32, 164, 243, .3)",
    "rgba(30,113, 69, .3)",
    "rgba(153,93,129,.3)"
]

const borderColor = [
    "rgb(1,22,39)",
    "rgb(255,51,102)",
    "rgb(46, 196,182)",
    "rgb(32,164,243)",
    "rgb(30,113,69)",
    "rgb(153,93,129)"
]
new Chart("pie-1", {
    type: "pie",
    data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            borderColor: borderColor,
            data: yValues
        }]
    },
    options: {
        title: {
            display: true,
            text: "Leading Products"
        }
    }
});

const xVal1 = ['East Products', 'Containers', 'Dry port', 'Gen Warehouse', 'Others']
const yVal1 = [50, 40, 30, 25, 30]

new Chart("pie-2", {
    type: "pie",
    data: {
        labels: xVal1,
        datasets: [{
            backgroundColor: barColors,
            borderColor: borderColor,
            data: yVal1
        }]
    },
    options: {
        title: {
            display: true,
            text: "Main Warehouses"
        }
    }
});

const xVal2 = ['North America', 'Europe', 'Asia', 'Australia', 'Africa', 'South America']
const yVal2 = [60, 40, 50, 30, 25, 20]

// const barColors1=[
//     "#011627",
//     "#ff3366",
//     "#2ec4b6",
//     "#20A4f3",
//     "#1e7145",
//     "#f6f740"
//   ]

new Chart("pie-3", {
    type: "pie",
    data: {
        labels: xVal2,
        datasets: [{
            backgroundColor: barColors,
            borderColor: borderColor,
            data: yVal2
        }]
    },
    options: {
        title: {
            display: true,
            text: "Markets"
        }
    }
});

const xBar=[
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
]

const yBar=[
    1200,
    1111,
    2002,
    1600,
    2400,
    1800,
    1300,
    1400,
    2200,
    1900,
    3200,
    2900,
]

new Chart("bar-graph", {
    type: "line",
    data: {
      labels: xBar,
      datasets: [{
        fill: true,
        lineTension: 0,
        backgroundColor: "rgba(30,113,69,.4)",
        borderColor: "rgb(30,113,69)",
        data: yBar,
        label: "Yearly trends"
      }]
    },
    options: {
        title: {
            display: true,
            text: "Markets"
        }
    //   legend: {display: true},
    // //   scales: {
    // //     yAxes: [{ticks: {min: 6, max:16}}],
    // //   }
     }
  });