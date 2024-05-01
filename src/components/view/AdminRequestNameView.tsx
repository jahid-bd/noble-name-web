'use client';
import { getAllRequestedName } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import RequestedNameCardSection from '../section/RequestedNameCardSection';

const AdminNameRequestView = () => {
  const searchParams = useSearchParams();

  const activePage = searchParams.get('page');

  const {
    data: requestedNames,
    isLoading,
    error: isError,
  } = useQuery({
    queryKey: ['requested_name', activePage],
    queryFn: () => getAllRequestedName(Number(activePage)),
  });

  console.log(requestedNames);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-semibold text-text-primary">
          Name Request List
        </p>
      </div>

      <RequestedNameCardSection
        names={requestedNames}
        isError={isError}
        isLoading={isLoading}
      />
    </div>
  );
};

export default AdminNameRequestView;
