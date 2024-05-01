'use client';

import { getAllBlog } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
import AdminBlogCardSection from '../section/AdminBlogCardSection';

const AdminBlogView = () => {
  const searchParams = useSearchParams();

  const activePage = searchParams.get('page');

  const {
    data: blogs,
    isLoading,
    error: isError,
  } = useQuery({
    queryKey: ['blogs', activePage],
    queryFn: () => getAllBlog(Number(activePage)),
  });

  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    const body = document.getElementsByTagName('body')[0];

    body.style.overflow = 'hidden';

    setOpenModal(true);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-semibold text-text-primary">Blog List</p>

        <button
          type="button"
          onClick={handleOpenModal}
          className="bg-primary text-white text-sm px-5 py-1.5 rounded-md"
        >
          Create Blog
        </button>
      </div>

      <AdminBlogCardSection
        blogs={blogs}
        isError={isError}
        isLoading={isLoading}
      />

      {openModal && (
        <div>
          <h1>Data open on modal</h1>
        </div>
      )}
    </div>
  );
};

export default AdminBlogView;
