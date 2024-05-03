'use client';

import FilterIcon from '@/assets/icons/FilterIcon';
import NameCard from '@/components/cards/NameCard';
import GlobalPagination from '@/components/pagination/GlobalPagination';
import NameSearchSection from '@/components/section/NameSearchSection';
import { useEffect, useState } from 'react';
import NameFilterModal from '../modal/NameFilterModal';

const NameSearchView = () => {
  const [openFilter, setOpenFilter] = useState(false);

  useEffect(() => {
    if (openFilter) {
      document.body.style.scrollBehavior = 'smooth';
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openFilter]);

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
            153 results
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-8">
          <NameCard />
          <NameCard />
          <NameCard />
          <NameCard />
          <NameCard />
          <NameCard />
          <NameCard />
          <NameCard />
          <NameCard />
          <NameCard />
          <NameCard />
          <NameCard />
        </div>

        <GlobalPagination />
      </div>

      {openFilter && (
        <NameFilterModal handleCloseFilter={() => setOpenFilter(false)} />
      )}
    </main>
  );
};

export default NameSearchView;
