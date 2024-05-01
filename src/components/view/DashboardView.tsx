'use client';
import NameTypeGroupBtn from '@/components/buttons/NameTypeGroupBtn';
import UserDashboardNav from '@/components/navs/UserDashboardNav';
import DashboardTab from '@/components/tab/DashboardTab';
import {
  getUserBookmarks,
  getUserFavorites,
  getUserSuggestedName,
} from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import BookmarkCardSection from '../section/BookmarkCardSection';
import FavoriteCardSection from '../section/FavoriteCardSection';
import NameAddedCardSection from '../section/NameAddedCardSection';

const DashboardView = () => {
  const searchParams = useSearchParams();

  const tab = searchParams.get('tab');
  const activePage = searchParams.get('page');

  const {
    data: favorites,
    isLoading: favoriteLoading,
    error: favoriteError,
  } = useQuery({
    queryKey: ['favorites', activePage],
    queryFn: () => getUserFavorites(Number(activePage)),
  });

  const {
    data: bookmarks,
    isLoading: bookmarkLoading,
    error: bookmarkError,
  } = useQuery({
    queryKey: ['bookmarks', activePage],
    queryFn: getUserBookmarks,
  });

  const {
    data: suggestedName,
    isLoading: suggestedNameLoading,
    error: suggestedNameError,
  } = useQuery({
    queryKey: ['suggestedName', activePage],
    queryFn: getUserSuggestedName,
  });

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
          <FavoriteCardSection
            favorites={favorites}
            isError={favoriteError}
            isLoading={favoriteLoading}
          />
        )}

        {tab === 'bookmarks' && (
          <BookmarkCardSection
            bookmarks={bookmarks}
            isError={bookmarkError}
            isLoading={bookmarkLoading}
          />
        )}

        {tab === 'names-added' && (
          <NameAddedCardSection
            suggestedName={suggestedName}
            isError={suggestedNameError}
            isLoading={suggestedNameLoading}
          />
        )}
      </div>
    </main>
  );
};

export default DashboardView;
