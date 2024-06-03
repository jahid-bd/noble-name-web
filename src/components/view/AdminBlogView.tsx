'use client';

import { deleteBlogApi, getAllBlog } from '@/services/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import CreateBlogModal from '../modal/CreateBlogModal';
import AdminBlogCardSection from '../section/AdminBlogCardSection';

interface blogEditProps {
  title: string;
  slug: string;
  thumbnail: string;
  metaTittle: string;
  description: string;
  content: string;
}

const AdminBlogView = () => {
  const queryClient = useQueryClient();
  const [editID, setEditID] = useState('');
  const [openForm, setOpenForm] = useState(false);
  const [editBlogData, setEditBlogData] = useState<blogEditProps | null>();

  const searchParams = useSearchParams();
  const activePage = searchParams.get('page');

  const handleEdit = (value: any) => {
    if (value) {
      setEditID(value?._id);
      setEditBlogData({
        slug: value?.slug,
        title: value?.title,
        content: value?.content,
        thumbnail: value?.thumbnail,
        metaTittle: value?.metaTittle,
        description: value?.description,
      });
    }
  };

  const {
    data: blogs,
    isLoading,
    error: isError,
  } = useQuery({
    queryKey: ['blogs', activePage],
    queryFn: () => getAllBlog(Number(activePage)),
  });

  const { mutate: deleteBlog } = useMutation({
    mutationFn: (id: string) => deleteBlogApi(id),
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: (data: any) => {
      toast.success('Blog delete successfully.');
      queryClient.invalidateQueries();
    },
  });

  useEffect(() => {
    if (openForm) {
      document.body.style.scrollBehavior = 'smooth';
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openForm]);

  return (
    <div className="px-1.5">
      <div className="mb-11 md:mb-16">
        <h3 className="text-3xl md:text-4xl font-semibold text-text-primary mb-3 text-center">
          Latest Articles
        </h3>

        <p className="text-text-tertiary text-lg md:text-xl font-normal text-center">
          Learn about Muslim Naming, Parenting and more…
        </p>
      </div>

      <div className="flex justify-between items-center mb-6">
        <p className="text-2xl font-semibold text-text-primary">Blog List</p>

        <button
          type="button"
          onClick={() => setOpenForm(true)}
          className="bg-primary text-white text-sm px-5 py-1.5 rounded-md"
        >
          Create a New Article
        </button>
      </div>

      <AdminBlogCardSection
        blogs={blogs}
        isError={isError}
        isLoading={isLoading}
        handleEdit={handleEdit}
        handleDelete={deleteBlog}
      />

      {openForm && (
        <CreateBlogModal
          isEdit={false}
          handleClose={() => setOpenForm(false)}
        />
      )}
      {editBlogData && editID && (
        <CreateBlogModal
          id={editID}
          initialValues={editBlogData}
          isEdit={true}
          handleClose={() => {
            setEditBlogData(null);
          }}
        />
      )}
    </div>
  );
};

export default AdminBlogView;
