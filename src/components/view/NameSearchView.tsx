'use client';

import FilterIcon from '@/assets/icons/FilterIcon';
import NameCard from '@/components/cards/NameCard';
import GlobalPagination from '@/components/pagination/GlobalPagination';
import NameSearchSection from '@/components/section/NameSearchSection';
import { getNames } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import PreLoader from '../loader/Loader';
import NotFound from '../loader/NotFound';
import NameFilterModal from '../modal/NameFilterModal';

const NameSearchView = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const searchParams = useSearchParams();

  const params = searchParams.toString();
  const router = useRouter();

  useEffect(() => {
    if (openFilter) {
      document.body.style.scrollBehavior = 'smooth';
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openFilter]);

  const {
    data: names,
    isLoading,
    error: isError,
  } = useQuery({
    queryKey: ['names', params],
    queryFn: () => getNames(params),
  });

  console.log(names);

  return (
    <main className="bg-white pb-[60px] md:pb-[60px]">
      <div className="container mx-auto px-[6px]">
        <section className="bg-white pt-10 mb-9">
          <div className="container mx-auto px-[6px]">
            <NameSearchSection />
          </div>
        </section>

        <div className="flex justify-between items-center mb-4 md:mb-6">
          <p className="text-base font-semibold text-text-tertiary">
            {names?.data?.pagination?.totalItems} results
          </p>

          <button
            type="button"
            onClick={() => setOpenFilter(true)}
            className="flex items-center gap-1.5 text-text-secondary border border-border-primary rounded-lg drop-shadow-btn-shadow-xs px-3.5 py-2.5"
          >
            <FilterIcon />

            <span>Filter Results</span>
          </button>
        </div>

        {isLoading && (
          <div className="flex w-[400px] items-center justify-center mx-auto">
            <PreLoader />
          </div>
        )}

        {(isError || names?.data?.pagination?.totalItems <= 0) && (
          <div className="flex w-[400px] items-center justify-center mx-auto">
            <NotFound />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-8 items-center justify-center">
          <>
            {names?.data?.data?.map((item: any) => (
              <NameCard
                key={item._id}
                name={{
                  name: {
                    _id: item._id,
                    english_name: item.english_name,
                    arabic_name: item.arabic_name,
                    meanings: item.meanings,
                    tags: item.tags,
                    gender: item.gender,
                  },
                  isFavorite: item.isFavorite,
                  isBookmarked: item.isBookmarked,
                }}
              />
            ))}
          </>
        </div>

        {names?.data?.pagination?.totalItems >
          names?.data?.pagination?.limit && (
          <GlobalPagination
            page={names?.data?.pagination?.page}
            totalPage={names?.data?.pagination?.totalPage}
          />
        )}
      </div>

      {openFilter && (
        <NameFilterModal handleCloseFilter={() => setOpenFilter(false)} />
      )}
    </main>
  );
};

export default NameSearchView;
