'use client';
import { useState } from 'react';
import InputField from '../form/InputField';
import TextareaField from '../form/TextareaField';

const genderOptions = [
  {
    value: '',
    label: 'Select origin',
  },
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female:',
    label: 'Female',
  },
];

const CreateBlogModal = ({ handleClose }: { handleClose: () => void }) => {
  const [modal, setmodal] = useState(false);

  return (
    <div className="bg-black bg-opacity-10 absolute top-0 left-0 right-0 bottom-0 z-40 flex items-center justify-center">
      <div className="container mx-auto px-1.5 md:px-20">
        <div className="px-4 py-8 md:px-8 bg-white rounded-[10px] shadow-modal">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-4">
            <InputField
              type="text"
              label="Title"
              name="title"
              placeholder="Enter blog title"
              onChange={(e) => console.log(e)}
              value={''}
            />

            <InputField
              type="text"
              label="Meta Tittle"
              name="metaTittle"
              placeholder="Enter blog meta title"
              onChange={(e) => console.log(e)}
              value={''}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[14px] mb-4">
            <TextareaField
              label="Description"
              name="description"
              placeholder="Write your blog description"
              onChange={(e) => console.log(e)}
              value={''}
            />

            <TextareaField
              label="Meta description"
              name="metaDescription"
              placeholder="Write your blog meta description"
              onChange={(e) => console.log(e)}
              value={''}
            />
          </div>

          <div className="grid grid-cols-1 gap-[14px] mb-4">
            <InputField
              type="text"
              label="Slug"
              name="slug"
              placeholder="Enter blog slug"
              onChange={(e) => console.log(e)}
              value={''}
            />
          </div>

          <div className="grid grid-cols-1 gap-[14px] mb-4">
            <TextareaField
              label="Content"
              name="content"
              placeholder="Write your blog content"
              onChange={(e) => console.log(e)}
              value={''}
            />
          </div>

          <div className="flex justify-center md:justify-start">
            <button
              type="button"
              className="py-2.5 px-20 rounded-lg bg-primary text-white text-base font-medium"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlogModal;
