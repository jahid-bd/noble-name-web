'use client';

import { getAnalytics } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import AnalyticsFilterGroupBtn from '../buttons/AnalysticsFilterBtnGroup';
import AccountCard from '../cards/AccountCard';
import AnalyticsCard from '../cards/AnalyticsCard';
import EditableNameCard from '../cards/EditableNameCard';
import UserCard from '../cards/UserCard';

const AdminDashboardView = () => {
  const {
    data: analytics,
    isLoading,
    error: isError,
  } = useQuery({
    queryKey: ['analytics'],
    queryFn: () => getAnalytics(),
  });

  console.log(analytics);

  return (
    <div className="mx-1.5">
      <div className="flex justify-between items-center mb-6 flex-wrap gap-2">
        <AnalyticsFilterGroupBtn />

        <button
          type="button"
          className=" text-text-placeholder bg-white text-sm px-3.5 py-2.5 rounded-md flex items-center gap-1 border border-border-secondary"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M17.5 8.33268H2.5M13.3333 1.66602V4.99935M6.66667 1.66602V4.99935M6.5 18.3327H13.5C14.9001 18.3327 15.6002 18.3327 16.135 18.0602C16.6054 17.8205 16.9878 17.4381 17.2275 16.9677C17.5 16.4329 17.5 15.7328 17.5 14.3327V7.33268C17.5 5.93255 17.5 5.23249 17.2275 4.69771C16.9878 4.2273 16.6054 3.84485 16.135 3.60517C15.6002 3.33268 14.9001 3.33268 13.5 3.33268H6.5C5.09987 3.33268 4.3998 3.33268 3.86502 3.60517C3.39462 3.84485 3.01217 4.2273 2.77248 4.69771C2.5 5.23249 2.5 5.93255 2.5 7.33268V14.3327C2.5 15.7328 2.5 16.4329 2.77248 16.9677C3.01217 17.4381 3.39462 17.8205 3.86502 18.0602C4.3998 18.3327 5.09987 18.3327 6.5 18.3327Z"
              stroke="#344054"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <span>Select dates</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
        <AnalyticsCard
          progressValue={12}
          title="Total Searches"
          value={analytics?.data?.data?.total_search}
        />

        <AnalyticsCard
          value="26.4k"
          progressValue={2}
          title="Total Search Page Visit"
        />

        <AnalyticsCard
          progressValue={2}
          title="Total Registered Users"
          value={analytics?.data?.data?.total_register_user}
        />

        <AnalyticsCard
          value="14k"
          progressValue={12}
          title="Total Unregistered Users"
        />
      </div>

      <div className="mb-6">
        <AccountCard accountData={analytics?.data?.data?.account} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-5">
        <AnalyticsCard
          progressValue={12}
          title="Bounce Rate %"
          value={analytics?.data?.data?.total_bounce}
        />

        <AnalyticsCard
          title="Loved"
          progressValue={2}
          value={analytics?.data?.data?.total_favorite}
        />

        <AnalyticsCard
          title="Bookmark"
          progressValue={2}
          value={analytics?.data?.data?.total_bookmark}
        />

        <AnalyticsCard
          title="Shared"
          progressValue={12}
          value={analytics?.data?.data?.total_share}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-5">
        {analytics?.data?.data?.top_ten_data?.top_ten_user?.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-text-primary pb-5">
              Top 10 User
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {analytics?.data?.data?.top_ten_data?.top_ten_user?.map(
                (item: any) => (
                  <UserCard user={item} key={item._id} />
                ),
              )}
            </div>
          </div>
        )}

        {analytics?.data?.data?.top_ten_data?.top_ten_favorite?.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-text-primary pb-5">
              Top 10 Favorite Name
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {analytics?.data?.data?.top_ten_data?.top_ten_favorite?.map(
                (item: any) => (
                  <EditableNameCard name={item} key={item._id} />
                ),
              )}
            </div>
          </div>
        )}

        {analytics?.data?.data?.top_ten_data?.top_ten_bookmark?.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-text-primary pb-5">
              Top 10 Bookmark Name
            </h3>

            <div className="grid grid-cols-1 gap-4">
              {analytics?.data?.data?.top_ten_data?.top_ten_bookmark?.map(
                (item: any) => (
                  <EditableNameCard name={item} key={item._id} />
                ),
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboardView;
