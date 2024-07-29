interface cardPropsType {
  title: string;
  value: string;
  comparer?: string;
  progress?: boolean;
  progressValue?: number;
}

const AnalyticsCard = ({
  title,
  value,
  comparer,
  progressValue,
}: cardPropsType) => {
  return (
    <div className="shadow-sm p-6 rounded-xl bg-white w-full">
      <p className="text-base font-semibold text-text-primary mb-6">{title}</p>

      <p className="text-4xl font-semibold text-text-primary mb-4">{value}</p>

      {progressValue && progressValue >= 0 && (
        <p className="flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.0003 15.8334V4.16675M10.0003 4.16675L4.16699 10.0001M10.0003 4.16675L15.8337 10.0001"
              stroke="#17B26A"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span className="text-border-success mr-1">{progressValue}%</span>
          <span className="text-text-tertiary">vs last {comparer} days</span>
        </p>
      )}

      {progressValue && progressValue < 0 && (
        <p className="flex items-center text-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="rotate-180"
          >
            <path
              d="M10.0003 15.8334V4.16675M10.0003 4.16675L4.16699 10.0001M10.0003 4.16675L15.8337 10.0001"
              stroke="#F04438"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span className="text-error-secondary mr-1">{-progressValue}%</span>
          <span className="text-text-tertiary">vs last {comparer} days</span>
        </p>
      )}
    </div>
  );
};

export default AnalyticsCard;
