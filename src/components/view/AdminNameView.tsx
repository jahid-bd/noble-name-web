'use client';

import { getAllName } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import AdminNameCardSection from '../section/AdminNameCardSection';

const AdminNameView = () => {
  const searchParams = useSearchParams();

  const activePage = searchParams.get('page');

  const {
    data: names,
    isLoading,
    error: isError,
  } = useQuery({
    queryKey: ['names', activePage],
    queryFn: () => getAllName(Number(activePage)),
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-semibold text-text-primary">Name List</p>

        <button
          type="button"
          className="bg-primary text-white text-sm px-5 py-1.5 rounded-md"
        >
          Create Name
        </button>
      </div>

      <AdminNameCardSection
        names={names}
        isError={isError}
        isLoading={isLoading}
      />
    </div>
  );
};

export default AdminNameView;
