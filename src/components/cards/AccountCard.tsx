const AccountCard = () => {
  return (
    <div className="shadow-sm p-6 rounded-xl bg-white">
      <h3 className="text-lg font-semibold text-text-primary pb-5 border-b border-border-primary">
        Accounts
      </h3>

      <div className="mt-10 flex flex-col md:flex-row items-center gap-20">
        <div className="w-full md:w-1/4">
          <h2>Pai chart</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-3/4">
          <div className="flex justify-between md:justify-start items-center md:items-start md:flex-col md:gap-6 md:p-6">
            <p className="text-base font-semibold text-text-primary">
              Free Accounts
            </p>

            <p className="text-4xl font-semibold text-text-primary">56.4k</p>
          </div>

          <div className="border-y md:border-y-0 md:border-x border-border-secondary flex justify-between md:justify-start items-center md:items-start md:flex-col md:gap-6 py-6 md:p-6">
            <p className="text-base font-semibold text-text-primary">
              Couple Plan
            </p>

            <p className="text-4xl font-semibold text-text-primary">14k</p>
          </div>

          <div className="flex justify-between md:justify-start items-center md:items-start md:flex-col md:gap-6 md:p-6">
            <p className="text-base font-semibold text-text-primary">
              Family Plan
            </p>

            <p className="text-4xl font-semibold text-text-primary">89.7k</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
