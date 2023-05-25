// app.js
  
  // 绘制柱状图
  function renderChart(data) {
    var labels = Object.keys(data);
    var scores = Object.values(data);
  
    var ctx = document.getElementById("bar-chart").getContext("2d");
    var chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "指标得分",
            data: scores,
            backgroundColor: "rgba(54, 162, 235, 0.6)"
          }
        ]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
            max: 10
          }
        }
      }
    });
  }