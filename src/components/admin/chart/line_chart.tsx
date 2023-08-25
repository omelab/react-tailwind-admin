import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChart: React.FC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        // Destroy the previous Chart instance if it exists
        if (chartInstanceRef.current) {
          chartInstanceRef.current.destroy();
        }

        // Create a new Chart instance
        var gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
        gradientStroke.addColorStop(1, 'rgba(94, 114, 228, 0.2)');
        gradientStroke.addColorStop(0.2, 'rgba(94, 114, 228, 0.0)');
        gradientStroke.addColorStop(0, 'rgba(94, 114, 228, 0)');

        const newChartInstance = new Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
              {
                label: 'Mobile apps',
                tension: 0.4,
                pointRadius: 0,
                borderColor: '#5e72e4',
                backgroundColor: gradientStroke,
                borderWidth: 3,
                fill: true,
                data: [50, 40, 300, 220, 500, 250, 400, 230, 500],
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            interaction: {
              intersect: false,
              mode: 'index',
            },
            scales: {
              y: {
                grid: {
                  display: true,
                  drawOnChartArea: true,
                  drawTicks: false,
                },
                ticks: {
                  display: true,
                  padding: 10,
                  color: '#fbfbfb',
                  font: {
                    size: 11,
                    family: 'Open Sans',
                    style: 'normal',
                    lineHeight: 2,
                  },
                },
              },
              x: {
                grid: {
                  display: false,
                  drawOnChartArea: false,
                  drawTicks: false,
                },
                ticks: {
                  display: true,
                  color: '#ccc',
                  padding: 20,
                  font: {
                    size: 11,
                    family: 'Open Sans',
                    style: 'normal',
                    lineHeight: 2,
                  },
                },
              },
            },
          },
        });

        // Update the reference to the new Chart instance
        chartInstanceRef.current = newChartInstance;
      }
    }

    return () => {
      // Clean up the Chart instance when the component unmounts
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
    };
  }, []);

  return <canvas ref={chartRef} height='300'></canvas>;
};

export default LineChart;
