'use client';

import { getBlogByID } from '@/services/api';
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
    queryFn: () => getBlogByID(params.blog_id as string),
  });

  return (
    <main className="bg-white pt-6 md:pt-[26px] pb-[60px] md:pb-[60px]">
      <div className="container mx-auto px-[6px]">
        {isLoading && <PreLoader />}

        {isError && !blog?.data && <NotFound />}

        {!isLoading && !isError && blog?.data && (
          <>
            <div className="w-full lg:w-3/4 h-[250px] md:h-[350px] relative">
              <Image
                fill
                alt="blog page"
                src={blog?.data?.thumbnail}
                className="w-full  object-cover"
              />
            </div>

            <div className="w-full lg:w-3/4 mt-6">
              <h1 className="text-2xl text-text-primary font-semibold mb-4">
                {blog?.data?.title}
              </h1>

              <p className="mb-4 text-base font-medium">
                {blog?.data?.description}
              </p>

              <div dangerouslySetInnerHTML={{ __html: blog?.data?.content }} />
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default BlogDetailView;
