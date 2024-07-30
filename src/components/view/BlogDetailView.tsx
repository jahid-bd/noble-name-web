'use client';

import { getBlogBySlug } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import PreLoader from '../loader/Loader';
import NotFound from '../loader/NotFound';

const BlogDetailView = () => {
  const params = useParams();

  const {
    data: blog,
    isLoading,
    error: isError,
  } = useQuery({
    queryKey: ['blog'],
    queryFn: () => getBlogBySlug(params.blog_id as string),
  });

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
                <h1 className="text-2xl text-text-primary font-semibold mb-4">
                  {blog?.data?.content?.title}
                </h1>

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
