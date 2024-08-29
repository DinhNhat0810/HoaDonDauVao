// components/LineChart.js
import { Chart, ChartData, Plugin } from "chart.js";
import { useEffect, useRef } from "react";
import "chart.js/auto";

interface DonutChartProps {
  chartData: ChartData;
  innerText: string;
}

function CircleChart({ chartData }: { chartData: any }) {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "rgba(255, 0, 0, 0.3)");
        gradient.addColorStop(1, "rgba(255, 0, 0, 0.1)");

        const newData = chartData?.datasets?.map((data: any) => ({
          ...data,
          backgroundColor: gradient,
        }));

        const donutChart = new Chart(ctx, {
          type: "doughnut",
          data: {
            labels: chartData.labels,
            datasets: newData,
          },
          options: {
            cutout: "70%",
            plugins: {
              legend: {
                display: false,
              },
              tooltip: {
                enabled: true,
              },
              // Custom plugin to draw text in the center
              title: {
                display: false,
              },
            },
            onClick: function ({ chart }, element) {
              if (element.length > 0) {
                const firstElementIndex = element[0].index;
                // Lấy dữ liệu của phần tử được click
                const label = this.data.labels[firstElementIndex];
                const value = this.data.datasets[0].data[firstElementIndex];
                // Thực hiện hành động, ví dụ: hiển thị thông tin
                console.log(`Label: ${label}, Value: ${value}`);

                // Bạn có thể thay thế console.log bằng bất kỳ hành động nào bạn muốn thực hiện
              }
            },
          },
          plugins: [
            {
              id: "textInsideDoughnut",
              beforeDraw: function (chart: any) {
                const width = chart.width,
                  height = chart.height,
                  ctx = chart.ctx;
                ctx.restore();

                const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                gradient.addColorStop(0, "rgba(250,174,50,1)");
                gradient.addColorStop(1, "rgba(250,174,50,0)");

                const fontSize = (height / 200).toFixed(2);
                ctx.font = `${fontSize}em sans-serif`;
                ctx.textBaseline = "middle";
                const text = chartData.datasets[0].data[0],
                  textX = Math.round((width - ctx.measureText(text).width) / 2),
                  textY = height / 2;
                ctx.fillText(text, textX, textY);
                ctx.save();
              },
            } as Plugin<"doughnut">,
          ],
        });

        return () => {
          donutChart.destroy();
        };
      }
    }
  }, [chartData]);

  return (
    <div className="chart-container flex justify-center">
      <canvas ref={chartRef} width="200" height="200" className="" />
    </div>
  );
}
export default CircleChart;
