import { ArcElement, Chart } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement);

const AccountDoughnutChat = () => {
  const data = {
    labels: ['Free', 'Couple Plan', 'Family Plan'],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: ['#00A991', '#33BAA7', '#8AD7CC'],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    cutoutPercentage: 80,
    // borderWidth: 20,
    plugins: {
      legend: {
        align: 'center',
        position: 'right',
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          useBorderRadius: true,
          borderRadius: 50,
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default AccountDoughnutChat;
