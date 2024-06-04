'use client';

import { getBlogBySlug } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
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
            <div className="col-span-9">
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
                  dangerouslySetInnerHTML={{
                    __html: blog?.data?.content?.content,
                  }}
                />
              </div>
            </div>

            <div className="col-span-3">
              <h3>Recent Articles</h3>

              <div>
                <div>
                  <h1>Hello world</h1>
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
