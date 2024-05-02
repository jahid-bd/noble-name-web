const AnalyticsCard = () => {
  return (
    <div className="shadow-sm p-6 rounded-xl bg-white">
      <p className="text-base font-semibold text-text-primary mb-6">
        Total Searches
      </p>

      <p className="text-4xl font-semibold text-text-primary mb-4">20.8k</p>

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

        <span className="text-border-success">12%</span>
        <span className="text-text-tertiary">vs last month</span>
      </p>
    </div>
  );
};

export default AnalyticsCard;
