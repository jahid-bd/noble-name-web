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
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import NotFound from '../loader/NotFound';
import BookmarkCardSection from '../section/BookmarkCardSection';
import FavoriteCardSection from '../section/FavoriteCardSection';
import NameAddedCardSection from '../section/NameAddedCardSection';

const DashboardView = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tab = searchParams.get('tab');
  const activePage = searchParams.get('page');
  const gender = searchParams.get('type');

  console.log({ gender });

  const {
    data: favorites,
    isLoading: favoriteLoading,
    error: favoriteError,
  } = useQuery({
    queryKey: ['favorites', activePage, gender],
    queryFn: () => getUserFavorites(Number(activePage), gender),
  });

  const {
    data: bookmarks,
    isLoading: bookmarkLoading,
    error: bookmarkError,
  } = useQuery({
    queryKey: ['bookmarks', activePage, gender],
    queryFn: () => getUserBookmarks(Number(activePage), gender),
  });

  const {
    data: suggestedName,
    isLoading: suggestedNameLoading,
    error: suggestedNameError,
  } = useQuery({
    queryKey: ['suggestedName', activePage, gender],
    queryFn: () => getUserSuggestedName(Number(activePage), gender),
  });

  useEffect(() => {
    if (!tab) {
      router.push(`/dashboard?tab=favorites`);
    }
  }, [tab]);

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

        {!['favorites', 'bookmarks', 'names-added'].includes(tab as string) && (
          <NotFound />
        )}
      </div>
    </main>
  );
};

export default DashboardView;
