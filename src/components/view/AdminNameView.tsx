'use client';

import {
  createNameUsingCSV,
  createNameUsingForm,
  getAllName,
} from '@/services/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AddNameModal from '../modal/AddNameModal';
import ChooseInputType from '../modal/ChooseInputType';
import AdminNameCardSection from '../section/AdminNameCardSection';

const AdminNameView = () => {
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const activePage = searchParams.get('page');
  const [openAddName, setOpenAddName] = useState(false);
  const [chooseOne, setChooseOne] = useState(false);

  const handleOpenForm = () => {
    setOpenAddName(true);
    setChooseOne(false);
  };

  const {
    data: names,
    isLoading,
    error: isError,
  } = useQuery({
    queryKey: ['names', activePage],
    queryFn: () => getAllName(Number(activePage)),
  });

  const { mutate: createNameByForm, isPending } = useMutation({
    mutationFn: (data: any) => createNameUsingForm(data),
    onError: (error: any) => {
      console.log('error', error.message);
      toast.error(error.message);
    },
    onSuccess: (data: any) => {
      setOpenAddName(false);
      toast.success('Name create successfully');
      queryClient.invalidateQueries({ queryKey: ['names'] });
    },
  });

  const { mutate: createNameByCSV } = useMutation({
    mutationFn: (data: any) => createNameUsingCSV(data),
    onError: (error: any) => {
      console.log('error', error.message);
      toast.error(error.message);
    },
    onSuccess: (data: any) => {
      console.log('hello');
      setChooseOne(false);
      toast.success('Name create successfully');
      queryClient.invalidateQueries({ queryKey: ['names'] });
    },
  });

  useEffect(() => {
    if (openAddName) {
      document.body.style.scrollBehavior = 'smooth';
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openAddName]);

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

      {chooseOne && (
        <ChooseInputType
          handleClose={() => setChooseOne(false)}
          handleOpenForm={handleOpenForm}
          handleCSVfileUpload={createNameByCSV}
        />
      )}

      {openAddName && (
        <AddNameModal
          handleClose={() => setOpenAddName(false)}
          handleSubmitForm={createNameByForm}
        />
      )}
    </div>
  );
};

export default AdminNameView;
