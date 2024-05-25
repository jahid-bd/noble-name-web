import BookmarkIcon from '@/assets/icons/BookmarkIcon';
import LoveIcon from '@/assets/icons/LoveIcon';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

interface TabProps {
  totalFavorites: number;
  totalBookmarked: number;
  totalNameAdded: number;
}

const DashboardTab = ({
  totalFavorites = 0,
  totalBookmarked = 0,
  totalNameAdded = 0,
}: TabProps) => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');

  return (
    <div className="flex items-center gap-1">
      <Link
        href={{ query: { tab: 'favorites' } }}
        className={`px-2 md:px-3 py-2 flex items-center gap-2 text-xs md:text-base font-semibold text-text-secondary border-[2px] rounded-md ${
          tab === 'favorites'
            ? 'border-border-success bg-green-light-50'
            : 'border-transparent'
        }`}
      >
        <LoveIcon isFavorite={true} />
        Love
        <span className="border-border-secondary border bg-gray-bg rounded-full py-0.5 px-2.5 text-xs md:text-sm font-medium">
          {totalFavorites}
        </span>
      </Link>

      <Link
        href={{ query: { tab: 'bookmarks' } }}
        className={`px-2 md:px-3 py-2 flex items-center gap-2 text-xs md:text-base font-semibold text-text-secondary border-[2px] rounded-md ${
          tab === 'bookmarks'
            ? 'border-border-success bg-green-light-50'
            : 'border-transparent'
        }`}
      >
        <BookmarkIcon isBookmarked={true} />
        Favourite
        <span className="border-border-secondary border bg-gray-bg rounded-full py-0.5 px-2.5 text-xs md:text-sm font-medium">
          {totalBookmarked}
        </span>
      </Link>

      <Link
        href={{ query: { tab: 'names-added' } }}
        className={`px-2 md:px-3 py-2 flex items-center gap-2 text-xs md:text-base font-semibold text-text-secondary border-[2px] rounded-md ${
          tab === 'names-added'
            ? 'border-border-success bg-green-light-50'
            : 'border-transparent'
        }`}
      >
        Names Added
        <span className="border-border-secondary border bg-gray-bg rounded-full py-0.5 px-2.5 text-xs md:text-sm font-medium">
          {totalNameAdded}
        </span>
      </Link>
    </div>
  );
};

export default DashboardTab;
