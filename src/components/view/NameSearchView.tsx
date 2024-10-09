'use client';

import FilterIcon from '@/assets/icons/FilterIcon';
import ResetIcon from '@/assets/icons/ResetIcon';
import NameCard from '@/components/cards/NameCard';
import GlobalPagination from '@/components/pagination/GlobalPagination';
import NameSearchSection from '@/components/section/NameSearchSection';
import useSearchQueryParam from '@/hooks/useSearchQueryParam';
import { getNames } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import SortingInput from '../inputs/SortingInput';
import PreLoader from '../loader/Loader';
import NotFound from '../loader/NotFound';
import NameFilterModal from '../modal/NameFilterModal';
import PlanUpgradeModal from '../modal/PlanUpgradeModal';

const NameSearchView = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [openFilter, setOpenFilter] = useState(false);
  const [openPlanModal, setOpenPlanModal] = useState(false);
  const { setQueryParams, deleteParams } = useSearchQueryParam();

  const params = searchParams.toString();

  const handleReset = () => {
    let url: any = '';

    // const search = searchParams.get('search');
    // const language = searchParams.get('language');
    // const gender = searchParams.get('gender');
    // const search_by = searchParams.get('search_by');

    // url = search && setQueryParams(url, 'search', search);
    // url = language && setQueryParams(url, 'language', language);
    // url = gender && setQueryParams(url, 'gender', gender);
    // url = search_by && setQueryParams(url, 'search_by', search_by);

    router.push(`/name-search${url ? `?${url}` : ''}`);
  };

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
  }: { error: any; data: any; isLoading: any } = useQuery({
    queryKey: ['names', params],
    queryFn: () => getNames(params),
  });

  useEffect(() => {
    if (isError?.response?.status === 429) {
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
      setOpenPlanModal(true);

      return () => {
        document.body.style.overflow = 'auto';
      };
    }
  }, [isError]);

  if (isError) {
    toast.error(isError?.response?.data?.message);
  }

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

          <div className="flex items-center gap-2 flex-col md:flex-row">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleReset}
                className="flex items-center gap-1.5 text-text-secondary border border-border-primary rounded-lg drop-shadow-btn-shadow-xs px-3.5 py-2.5"
              >
                <ResetIcon />

                <span>Clear</span>
              </button>

              <button
                type="button"
                onClick={() => setOpenFilter(true)}
                className="flex items-center gap-1.5 text-text-secondary border border-border-primary rounded-lg drop-shadow-btn-shadow-xs px-3.5 py-2.5"
              >
                <FilterIcon />

                <span>Filter</span>
              </button>
            </div>

            <div>
              <SortingInput />
            </div>
          </div>
        </div>

        {isLoading && !isError && (
          <div className="flex w-[400px] items-center justify-center mx-auto h-72">
            <PreLoader />
          </div>
        )}

        {(isError || names?.data?.pagination?.totalItems <= 0) && (
          <>
            <NotFound />
          </>
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
                    origin: item.origin,
                    historic_significance: item.historic_significance,
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

      {/* {isError?.response?.status === 429 && <PlanUpgradeModal />} */}
      {openPlanModal && (
        <PlanUpgradeModal
          handleClosePlanModal={() => {
            setOpenPlanModal(false);
            document.body.style.overflow = 'auto';
          }}
        />
      )}
    </main>
  );
};

export default NameSearchView;
