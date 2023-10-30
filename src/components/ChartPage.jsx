import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Chart from 'chart.js';
import { chartData } from '../feactures/slice/cryptoSlice';

const ChartPage = () => {
  const { coinId } = useParams();
  const dispatch = useDispatch();
  const { chart, isLoading, isError } = useSelector((state) => state.coins);

  const canvasRef = useRef(null);

  useEffect(() => {
    dispatch(chartData(coinId));
  }, [dispatch, coinId]);

  useEffect(() => {
    if (chart && chart.length > 0 && canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');

      const chartDataForChartJS = {
        labels: chart.map((dataPoint) => new Date(dataPoint[0]).toLocaleTimeString()),
        datasets: [
          {
            label: 'Price',
            data: chart.map((dataPoint) => dataPoint[1]),
            fill: false,
            borderColor: 'green',
          },
        ],
      };

      const chartOptions = {
        scales: {
          x: {
            type: 'time',
            time: {
              unit: 'hour',
            },
          },
        },
      };

      new Chart(ctx, {
        type: 'line',
        data: chartDataForChartJS,
        options: chartOptions,
      });
    }
  }, [chart]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error while fetching chart data.</div>;
  }

  return (
    <div className='bg-light shadow text-light'>
      <div style={{ maxWidth: '800px', margin: '0 auto', height:'400px'}}>
        <canvas ref={canvasRef}></canvas>
      </div>
    </div>
  );
};

export default ChartPage;
