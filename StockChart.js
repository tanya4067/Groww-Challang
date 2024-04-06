import React from 'react';
import { Line } from 'react-chartjs-2';

const StockChart = ({ data }) => {
  const chartData = {
    labels: ['Open', 'High', 'Low', 'Close'],
    datasets: [
      {
        label: 'Stock Prices',
        data: [data.livePriceDto.open, data.livePriceDto.high, data.livePriceDto.low, data.livePriceDto.close],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  return (
    <div>
      <h2>{data.companyName} Stock Chart</h2>
      <Line data={chartData} />
    </div>
  );
};

export default StockChart;