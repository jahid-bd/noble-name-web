import AccountDoughnutChat from '../chart/AccountDoughnutChart';

const AccountCard = ({ accountData }: { accountData: any }) => {
  return (
    <div className="shadow-sm p-6 rounded-xl bg-white">
      <h3 className="text-lg font-semibold text-text-primary pb-5 border-b border-border-primary">
        Accounts
      </h3>

      <div className="mt-10 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/4">
          <AccountDoughnutChat
            totalAccount={accountData?.total_account}
            dataList={accountData?.account_data_set}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full md:w-3/4">
          <div className="flex justify-between md:justify-start items-center md:items-start md:flex-col md:gap-6 md:p-6">
            <p className="text-base font-semibold text-text-primary flex gap-2 items-center">
              <div className="w-3 h-3 rounded-full bg-[#00A991]"></div>
              Free Accounts
            </p>

            <p className="text-4xl font-semibold text-text-primary">
              {accountData?.free_plan}
            </p>
          </div>

          <div className="border-y md:border-y-0 md:border-x border-border-secondary flex justify-between md:justify-start items-center md:items-start md:flex-col md:gap-6 py-6 md:p-6">
            <p className="text-base font-semibold text-text-primary flex gap-2 items-center">
              <div className="w-3 h-3 rounded-full bg-[#33BAA7]"></div>
              Couple Plan
            </p>

            <p className="text-4xl font-semibold text-text-primary">
              {accountData?.couple_plan}
            </p>
          </div>

          <div className="flex justify-between md:justify-start items-center md:items-start md:flex-col md:gap-6 md:p-6">
            <p className="text-base font-semibold text-text-primary flex gap-2 items-center">
              <div className="w-3 h-3 rounded-full bg-[#8AD7CC]"></div>
              Family Plan
            </p>

            <p className="text-4xl font-semibold text-text-primary">
              {accountData?.family_plan}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
