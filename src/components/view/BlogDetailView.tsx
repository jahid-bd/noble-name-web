'use client';

import { getBlogBySlug } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import PreLoader from '../loader/Loader';
import NotFound from '../loader/NotFound';

const childeAgeOptions = [
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

const BlogDetailView = () => {
  const params = useParams();
  const [category, setCategory] = useState('');

  const {
    data: blog,
    isLoading,
    error: isError,
  } = useQuery({
    queryKey: ['blog'],
    queryFn: () => getBlogBySlug(params.blog_id as string),
  });

  useEffect(() => {
    if (blog) {
      if (blog?.data?.content?.category) {
        const find = childeAgeOptions.find(
          (item) => item.value === blog?.data?.content?.category
        );

        setCategory(find ? find.label : '');
      }
    }
  }, [blog]);

  return (
    <main className="bg-white pt-6 md:pt-[26px] pb-[60px] md:pb-[60px]">
      <div className="container mx-auto px-[6px]">
        {isLoading && <PreLoader />}

        {isError && !blog?.data && <NotFound />}

        {!isLoading && !isError && blog?.data && (
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-9">
              <div className="h-[250px] md:h-[350px] relative">
                <Image
                  fill
                  alt="blog page"
                  src={blog?.data?.content?.thumbnail}
                  className="w-full  object-cover"
                />
              </div>

              <div className="mt-6">
                <div className="flex gap-2 flex-col items-start mb-4">
                  <p className="text-[15px] font-normal bg-green-100 w-fit">
                    {category}
                  </p>

                  <h1 className="text-2xl text-text-primary font-semibold">
                    {blog?.data?.content?.title}
                  </h1>

                  <p className="text-[15px] font-normal text-slate-400">
                    By {blog?.data?.content?.author}
                  </p>
                </div>

                <p className="mb-4 text-base font-medium">
                  {blog?.data?.content?.description}
                </p>

                <div
                  className="overflow-hidden"
                  dangerouslySetInnerHTML={{
                    __html: blog?.data?.content?.content,
                  }}
                />
              </div>
            </div>

            <div className="col-span-12 md:col-span-3">
              <div className="drop-shadow-sm rounded-md bg-slate-50 px-3 py-5 shadow-md">
                <h3 className="text-xl font-semibold mb-4">Latest Articles</h3>

                <div className="flex flex-col gap-4">
                  {blog?.data?.blogList?.map((item: any) => (
                    <Link
                      href={`/articles/${item?.slug}`}
                      key={item._id}
                      className=""
                    >
                      <div className="relative w-full h-[160px] rounded-2xl overflow-hidden">
                        <Image
                          fill
                          src={item?.thumbnail}
                          alt="image"
                          className="object-cover"
                        />
                      </div>

                      <div className="mt-3">
                        <h3 className="mb-2 text-text-primary font-semibold text-base">
                          {item?.title}
                        </h3>
                      </div>
                    </Link>
                    // <Link href={`/blog/${item?.slug}`} key={item.slug}>
                    //   <div
                    //     className="flex gap-2 items-start overflow-hidden hover:bg-gray-200"
                    //     key={item?._id}
                    //   >
                    //     <div className="w-[65px] h-[95px] relative">
                    //       <Image
                    //         fill
                    //         alt={item?.title}
                    //         src={item?.thumbnail}
                    //         className="w-full  object-cover"
                    //       />
                    //     </div>
                    //     <h4>{item?.title}</h4>
                    //   </div>
                    // </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default BlogDetailView;
