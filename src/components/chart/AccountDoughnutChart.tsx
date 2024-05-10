import { ArcElement, Chart } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement);
Chart.overrides.doughnut;

const AccountDoughnutChat = ({
  totalAccount,
  dataList = [],
}: {
  totalAccount: string;
  dataList: any;
}) => {
  const data = {
    labels: ['Free', 'Couple Plan', 'Family Plan'],
    datasets: [
      {
        label: 'My First Dataset',
        data: dataList,
        backgroundColor: ['#00A991', '#33BAA7', '#8AD7CC'],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: 90,
  };

  return (
    <div className="relative flex justify-center items-center">
      <Doughnut data={data} options={options} />

      <div className="absolute flex items-center flex-col">
        <p className="text-sm font-semibold text-text-primary mb-1">
          Total Accounts
        </p>
        <p className="text-3xl font-bold text-text-primary">{totalAccount}</p>
      </div>
    </div>
  );
};

export default AccountDoughnutChat;
