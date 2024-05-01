'use client';
import NameTypeGroupBtn from '@/components/buttons/NameTypeGroupBtn';
import NameCard from '@/components/cards/NameCard';
import UserDashboardNav from '@/components/navs/UserDashboardNav';
import GlobalPagination from '@/components/pagination/GlobalPagination';
import DashboardTab from '@/components/tab/DashboardTab';
import {
  getUserBookmarks,
  getUserFavorites,
  getUserSuggestedName,
} from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import SuggestedNameCard from '../cards/SuggestedNameCard';

const DashboardView = () => {
  const searchParams = useSearchParams();

  const {
    data: favorites,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['favorites'],
    queryFn: getUserFavorites,
  });

  const tab = searchParams.get('tab');

  const { data: bookmarks } = useQuery({
    queryKey: ['bookmarks'],
    queryFn: getUserBookmarks,
  });

  const { data: suggestedName } = useQuery({
    queryKey: ['suggestedName'],
    queryFn: getUserSuggestedName,
  });

  console.log(favorites, bookmarks, suggestedName);

  return (
    <main className="bg-white pt-6 md:pt-[26px] pb-[60px] md:pb-[60px]">
      <div className="container mx-auto px-[6px]">
        <UserDashboardNav />

        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 mb-10">
          <DashboardTab
            totalFavorites={favorites?.data.pagination?.totalItems}
            totalBookmarked={bookmarks?.data.pagination?.totalItems}
            totalNameAdded={suggestedName?.data.pagination?.totalItems}
          />

          <NameTypeGroupBtn />
        </div>

        {tab === 'favorites' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
              {favorites?.data?.data?.map((item: any) => (
                <NameCard name={item} />
              ))}
            </div>

            {favorites?.data.pagination?.totalItems >
              favorites?.data?.pagination?.limit && (
              <GlobalPagination
                page={favorites?.data?.pagination?.page}
                totalPage={favorites?.data?.pagination?.totalPage}
              />
            )}
          </>
        )}

        {tab === 'bookmarks' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
              {bookmarks?.data?.data?.map((item: any) => (
                <NameCard name={item} />
              ))}
            </div>

            {bookmarks?.data.pagination?.totalItems >
              bookmarks?.data?.pagination?.limit && (
              <GlobalPagination
                page={bookmarks?.data?.pagination?.page}
                totalPage={bookmarks?.data?.pagination?.totalPage}
              />
            )}
          </>
        )}

        {tab === 'names-added' && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
              {suggestedName?.data?.data?.map((item: any) => (
                <SuggestedNameCard name={item} />
              ))}
            </div>

            {suggestedName?.data.pagination?.totalItems >
              suggestedName?.data?.pagination?.limit && (
              <GlobalPagination
                page={suggestedName?.data?.pagination?.page}
                totalPage={suggestedName?.data?.pagination?.totalPage}
              />
            )}
          </>
        )}
      </div>
    </main>
  );
};

export default DashboardView;
