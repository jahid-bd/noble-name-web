'use client';
import {
  approveRequestedName,
  getAllRequestedName,
  rejectRequestedName,
} from '@/services/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { toast } from 'react-toastify';
import RequestedNameCardSection from '../section/RequestedNameCardSection';

const AdminNameRequestView = () => {
  const queryClient = useQueryClient();
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

  const { mutate: nameApproved } = useMutation({
    mutationFn: (id: string) => approveRequestedName(id),
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: (data: any) => {
      toast.success('Name approved successfully.');
      queryClient.invalidateQueries({ queryKey: ['requested_name'] });
    },
  });

  const { mutate: nameReject } = useMutation({
    mutationFn: (id: string) => rejectRequestedName(id),
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: (data: any) => {
      toast.success('Name rejected successfully.');
      queryClient.invalidateQueries({ queryKey: ['requested_name'] });
    },
  });

  return (
    <Suspense>
      <div className="px-1.5">
        <div className="flex justify-between items-center mb-6">
          <p className="text-2xl font-semibold text-text-primary">
            Name Request List
          </p>
        </div>

        <RequestedNameCardSection
          isError={isError}
          isLoading={isLoading}
          names={requestedNames}
          handleReject={(id) => nameReject(id)}
          handleApprove={(id) => nameApproved(id)}
        />
      </div>
    </Suspense>
  );
};

export default AdminNameRequestView;
