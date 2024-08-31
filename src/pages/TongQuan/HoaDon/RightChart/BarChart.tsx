// components/LineChart.js
import { Chart, ChartData, Plugin } from "chart.js";
import { useEffect, useRef } from "react";
import "chart.js/auto";

interface DonutChartProps {
  chartData: ChartData;
  innerText: string;
}

function BarChart({ chartData }: { chartData: any }) {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");
      if (ctx) {
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "rgba(255, 177, 104, 1)");
        gradient.addColorStop(1, "rgba(255, 120, 79, 1)");

        const newData = chartData?.datasets?.map((data: any) => ({
          ...data,
          backgroundColor: gradient,
        }));

        const donutChart = new Chart(ctx, {
          type: "bar",
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
            onClick: function ({ chart }, element) {},
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
      <canvas
        ref={chartRef}
        width="200"
        height="200"
        className="!w-[260px] !h-[280px]"
      />
    </div>
  );
}
export default BarChart;
