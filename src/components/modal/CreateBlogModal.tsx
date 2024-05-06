'use client';

import { createBlogApi, updateBlogApi } from '@/services/api';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import InputField from '../form/InputField';
import TextareaField from '../form/TextareaField';
import GlobalTextEditor from '../textEditor/GlobalTextEditor';

interface FormValueProps {
  title: string;
  slug: string;
  thumbnail: string;
  metaTittle: string;
  description: string;
  content: string;
}

const CreateBlogModal = ({
  id,
  handleClose,
  initialValues,
}: {
  id?: string;
  handleClose: () => void;
  initialValues?: FormValueProps;
}) => {
  const [content, setContent] = useState<string>('');
  const [customError, setCustomError] = useState({
    content: {
      message: 'This field must not be empty.',
      error: false,
    },
  });

  const { mutate: createBlog, isPending } = useMutation({
    mutationFn: (data: any) => createBlogApi(data),
    onError: (error: any) => {
      console.log('error', error);

      toast.error(error.message);
    },
    onSuccess: (data) => {
      handleClose();
      setContent('');

      toast.success('Blog create successfully');
    },
  });

  const { mutate: updateBlog } = useMutation({
    mutationFn: ({ data, id }: { data: any; id: string }) =>
      updateBlogApi(data, id),
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      handleClose();
      setContent('');

      toast.success('Blog update successfully');
    },
  });

  const schema = yup
    .object({
      slug: yup
        .string()
        .min(3, 'This field must be at least 3 characters long.')
        .max(200, 'This field must be at most 200 characters long.')
        .required('This field must not be empty.'),
      // thumbnail: yup.string().required('This field must not be empty.'),
      metaTittle: yup
        .string()
        .min(3, 'This field must be at least 3 characters long.')
        .max(200, 'This field must be at most 200 characters long.')
        .required('This field must not be empty.'),
      description: yup
        .string()
        .min(3, 'This field must be at least 3 characters long.')
        .max(200, 'This field must be at most 200 characters long.')
        .required('This field must not be empty.'),
      title: yup
        .string()
        .min(3, 'This field must be at least 3 characters long.')
        .max(200, 'This field must be at most 200 characters long.')
        .required('This field must not be empty.'),
    })
    .required();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    criteriaMode: 'all',
    mode: 'onChange',
  });

  const onSubmit = (data: any) => {
    setCustomError({
      content: {
        message: 'This field must not be empty.',
        error: false,
      },
    });

    if (!content) {
      setCustomError((prev) => ({
        ...prev,
        content: {
          ...prev.content,
          error: true,
        },
      }));
    }

    if (data && content && !initialValues && !id) {
      return createBlog({ ...data, content });
    }

    if (data && content && initialValues && id) {
      return updateBlog({ data: { ...data, content }, id });
    }
  };

  useEffect(() => {
    if (initialValues) {
      reset(initialValues);
      setContent(initialValues.content);
    }
  }, [initialValues]);

  console.log(initialValues);

  return (
    <div className="bg-black bg-opacity-10 absolute top-0 left-0 right-0 bottom-0 z-40 flex items-center justify-center">
      <div className="container mx-auto px-1.5 md:px-20">
        <div className="px-4 py-8 md:px-8 bg-white rounded-[10px] shadow-modal max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-text-tertiary ">
              Create Blog
            </h3>

            <button type="button" onClick={handleClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.16992 14.8299L14.8299 9.16992"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.8299 14.8299L9.16992 9.16992"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-4">
              <InputField
                type="text"
                name="title"
                label="Title"
                register={register}
                error={errors.title?.message}
                placeholder="Enter blog title"
              />

              <InputField
                type="text"
                name="metaTittle"
                label="Meta Tittle"
                register={register}
                error={errors.metaTittle?.message}
                placeholder="Enter blog meta title"
              />
            </div>

            <div className="grid grid-cols-1 gap-[14px] mb-4">
              <TextareaField
                name="description"
                label="Description"
                register={register}
                error={errors.description?.message}
                placeholder="Write your blog description"
              />
            </div>

            <div className="grid grid-cols-1 gap-[14px] mb-4">
              <InputField
                type="text"
                name="slug"
                label="Slug"
                register={register}
                placeholder="Enter blog slug"
                error={errors.slug?.message}
              />
            </div>

            <div className="grid grid-cols-1 gap-[14px] mb-4">
              <GlobalTextEditor
                label="Content"
                content={content}
                setContent={(value) => setContent(value)}
                error={
                  customError.content.error ? customError.content.message : ''
                }
              />
            </div>

            <div className="flex justify-center md:justify-start">
              <button className="py-2.5 px-20 rounded-lg bg-primary text-white text-base font-medium">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogModal;
