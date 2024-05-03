'use client';

import { getAllName } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import AddNameModal from '../modal/AddNameModal';
import ChooseInputType from '../modal/ChooseInputType';
import AdminNameCardSection from '../section/AdminNameCardSection';

const AdminNameView = () => {
  const searchParams = useSearchParams();
  const activePage = searchParams.get('page');
  const [openAddName, setOpenAddName] = useState(false);
  const [chooseOne, setChooseOne] = useState(false);

  useEffect(() => {
    if (openAddName) {
      document.body.style.scrollBehavior = 'smooth';
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openAddName]);

  const {
    data: names,
    isLoading,
    error: isError,
  } = useQuery({
    queryKey: ['names', activePage],
    queryFn: () => getAllName(Number(activePage)),
  });

  return (
    <div className="px-1.5">
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-semibold text-text-primary">Name List</p>

        <button
          type="button"
          onClick={() => setChooseOne(true)}
          className="bg-primary text-white text-sm px-5 py-1.5 rounded-md"
        >
          Create Name
        </button>
      </div>

      <AdminNameCardSection
        names={names}
        isError={isError}
        isLoading={isLoading}
        handleEdit={() => setOpenAddName(true)}
      />

      {chooseOne && <ChooseInputType handleClose={() => setChooseOne(false)} />}

      {openAddName && (
        <AddNameModal handleClose={() => setOpenAddName(false)} />
      )}
    </div>
  );
};

export default AdminNameView;
