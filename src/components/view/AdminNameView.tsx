'use client';

import SearchBtn from '@/assets/icons/SarchBtn';
import {
  createNameUsingCSV,
  createNameUsingForm,
  deleteNameForAdminApi,
  getAllNameForAdmin,
} from '@/services/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import InputField from '../form/InputField';
import AddNameModal from '../modal/AddNameModal';
import ChooseInputType from '../modal/ChooseInputType';
import AdminNameCardSection from '../section/AdminNameCardSection';

const AdminNameView = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const activePage = searchParams.get('page');
  const [searchName, setSearchName] = useState('');
  const [openAddName, setOpenAddName] = useState(false);
  const [chooseOne, setChooseOne] = useState(false);

  const params = searchParams.toString();

  const handleOpenForm = () => {
    setOpenAddName(true);
    setChooseOne(false);
  };

  const {
    data: names,
    isLoading,
    error: isError,
  } = useQuery({
    queryKey: ['names', activePage, params],
    queryFn: () => getAllNameForAdmin(Number(activePage), params),
  });

  const { mutate: createNameByForm, isPending } = useMutation({
    mutationFn: (data: any) => createNameUsingForm(data),
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
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
      toast.error(error?.response?.data?.message);
    },
    onSuccess: (data: any) => {
      setChooseOne(false);
      toast.success('Name create successfully');
      queryClient.invalidateQueries({ queryKey: ['names'] });
    },
  });

  const { mutate: deleteName } = useMutation({
    mutationFn: (id: string) => deleteNameForAdminApi(id),
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: (data: any) => {
      toast.success('Name delete successfully.');
      queryClient.invalidateQueries();
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
      <div className="flex justify-between items-center mb-3">
        <p className="text-2xl font-semibold text-text-primary">Name List</p>

        <button
          type="button"
          onClick={() => setChooseOne(true)}
          className="bg-primary text-white text-sm px-5 py-1.5 rounded-md"
        >
          Create Name
        </button>
      </div>

      <div className="flex justify-between items-center mb-6">
        <p className="text-base font-semibold text-text-tertiary">
          {names?.data?.pagination?.totalItems} results
        </p>

        <div className="flex items-center gap-2">
          <InputField
            type="text"
            name="name"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />

          <button
            type="button"
            onClick={() =>
              router.push(`/admin/name${searchName && `?name=${searchName}`}`)
            }
            className="bg-primary px-4 py-2.5 rounded-full mb-1"
          >
            <SearchBtn />
          </button>
        </div>
      </div>

      <AdminNameCardSection
        names={names}
        isError={isError}
        isLoading={isLoading}
        handleDelete={deleteName}
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
