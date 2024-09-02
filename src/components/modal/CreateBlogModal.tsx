'use client';

import { createBlogApi, updateBlogApi } from '@/services/api';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import clsx from 'clsx';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import InputField from '../form/InputField';
import SelectInput from '../form/SelectInput';
import TextareaField from '../form/TextareaField';
import GlobalTextEditor from '../textEditor/GlobalTextEditor';

interface FormValueProps {
  title: string;
  slug: string;
  thumbnail: string;
  metaTittle: string;
  description: string;
  content: string;
  author?: string;
  category?: string;
}

const childeAgeOptions = [
  {
    value: '',
    label: 'Select',
  },
  {
    value: '0-3 months',
    label: 'Newborns (0-3 months)',
  },
  {
    value: '4-12 months',
    label: 'Infants (4-12 months)',
  },
  {
    value: '1-3 years',
    label: 'Toddlers (1-3 years)',
  },
  {
    value: '3-5 years',
    label: 'Preschoolers (3-5 years)',
  },
  {
    value: '6-12 years',
    label: 'School-Age Children (6-12 years)',
  },
  {
    value: '13-18 years',
    label: 'Teenagers (13-18 years)',
  },
];

const CreateBlogModal = ({
  id,
  handleClose,
  initialValues,
  isEdit,
}: {
  id?: string;
  handleClose: () => void;
  initialValues?: FormValueProps;
  isEdit?: boolean;
}) => {
  const queryClient = useQueryClient();
  const [content, setContent] = useState<string>('');
  const [category, setCategory] = useState<{ label: string; value: string }>(
    childeAgeOptions[0]
  );
  const [customError, setCustomError] = useState({
    content: {
      message: 'This field must not be empty.',
      error: false,
    },
    category: {
      message: 'This field must not be empty.',
      error: false,
    },
    thumbnail: {
      message: 'This field must not be empty.',
      error: false,
    },
  });

  const [isUpdate, setIsUpdate] = useState(false);

  const { mutate: createBlog, isPending } = useMutation({
    mutationFn: (data: any) => createBlogApi(data),
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    },
    onSuccess: (data) => {
      handleClose();
      setContent('');

      toast.success('Blog create successfully');
      queryClient.invalidateQueries();
    },
  });

  const { mutate: updateBlog } = useMutation({
    mutationFn: ({ data, id }: { data: any; id: string }) =>
      updateBlogApi(data, id),
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    },
    onSuccess: (data) => {
      handleClose();
      setContent('');

      toast.success('Blog update successfully');
      queryClient.invalidateQueries();
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
      author: yup
        .string()
        .min(3, 'This field must be at least 3 characters long.')
        .max(100, 'This field must be at most 100 characters long.')
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

  const [thumbnail, setThumbnail] = useState();

  const onDrop = useCallback((acceptedFile: any) => {
    setThumbnail(acceptedFile[0]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    maxSize: 3145728,
    onDrop,
    multiple: false,
    maxFiles: 1,
  });

  console.log(thumbnail);

  const onSubmit = (data: any) => {
    setCustomError({
      content: {
        message: 'This field must not be empty.',
        error: false,
      },
      category: {
        message: 'This field must not be empty.',
        error: false,
      },
      thumbnail: {
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

    if (!category || !category?.value) {
      setCustomError((prev) => ({
        ...prev,
        category: {
          ...prev.category,
          error: true,
        },
      }));
    }

    if (!thumbnail) {
      setCustomError((prev) => ({
        ...prev,
        thumbnail: {
          ...prev.thumbnail,
          error: true,
        },
      }));
    }

    if (!isEdit) {
      if (data && content && thumbnail && category.value) {
        console.log('called inside eidt');
        return createBlog({
          ...data,
          content,
          thumbnail,
          category: category?.value,
        });
      }
    } else {
      if (id && content && category.value) {
        return updateBlog({
          data: {
            ...data,
            content,
            thumbnail: thumbnail ? thumbnail : initialValues?.thumbnail,
            category: category?.value,
          },
          id,
        });
      }
      // if (data && content && initialValues && id && !thumbnail) {
      //   return updateBlog({ data: { ...data, content, thumbnail }, id });
      // }
    }
  };

  useEffect(() => {
    if (initialValues) {
      reset(initialValues);
      setContent(initialValues.content);

      if (initialValues?.category) {
        const find = childeAgeOptions.find(
          (item) => item.value === initialValues.category
        );

        setCategory(find ? find : childeAgeOptions[0]);
      }
    }
  }, [initialValues]);

  return (
    <div className="bg-black bg-opacity-10 absolute top-0 left-0 right-0 bottom-0 z-40 flex items-center justify-center">
      <div className="container mx-auto px-1.5 md:px-20">
        <div className="px-4 py-8 md:px-8 bg-white rounded-[10px] shadow-modal max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-end mb-4">
            {/* <h3 className="text-xl font-semibold text-text-tertiary ">
              Create Blog
            </h3> */}

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
            <div className="mb4">
              <div
                {...getRootProps()}
                className={clsx(
                  'my-4 border border-border-primary flex items-center justify-center w-full h-[350px] text-center relative rounded-md',
                  customError.thumbnail.error && '!border-red-500'
                )}
              >
                <div
                // className={
                //   blogImage &&
                //   'relative flex items-center justify-center w-full h-full z-20 bg-black/50 text-white'
                // }
                >
                  <p>Drag or click to upload thumbnail</p>
                  <input {...getInputProps()} className="w-full h-full" />
                </div>

                <div className="absolute w-full h-full  z-10">
                  {!thumbnail && isEdit ? (
                    <>
                      <Image
                        src={
                          `${initialValues?.thumbnail}` || '/images/Image.jpg'
                        }
                        alt=""
                        layout="fill"
                        objectFit="cover"
                      />
                    </>
                  ) : (
                    <>
                      {thumbnail && (
                        <Image
                          src={
                            `${URL?.createObjectURL(thumbnail)}` ||
                            '/images/Image.jpg'
                          }
                          alt=""
                          layout="fill"
                          objectFit="cover"
                        />
                      )}
                    </>
                  )}
                </div>
              </div>
              {customError.thumbnail.error ? (
                <p className="text-sm text-red-500 pt-[6px]">
                  {customError.thumbnail.message}
                </p>
              ) : null}
            </div>

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
                label="Meta Title"
                register={register}
                error={errors.metaTittle?.message}
                placeholder="Enter blog meta title"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-4">
              <InputField
                type="text"
                name="author"
                label="Author"
                register={register}
                error={errors.author?.message}
                placeholder="Enter blog author"
              />

              <SelectInput
                label="Category"
                options={childeAgeOptions}
                handleSelect={(opt) => setCategory(opt)}
                // selectedOption={
                //   formatDate.childAge[i]
                //     ? optionsState.childAge[i]
                //     : childeAgeOptions[0]
                // }
                selectedOption={category}
                error={
                  customError.category.error
                    ? customError.category.message
                    : false
                }
              />
            </div>

            <div className="grid grid-cols-1 gap-[14px] mb-4">
              <TextareaField
                name="description"
                label="Meta Description"
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
                {isEdit ? 'Update' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogModal;
