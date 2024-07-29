'use client';

import { getAllBlog } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import BlogCardSection from '../section/BlogCardSection';

const BlogView = () => {
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

  return (
    <main className="bg-white pt-6 md:pt-[26px] pb-[60px] md:pb-[60px]">
      <div className="container mx-auto px-[6px]">
        <div className="mb-11 md:mb-16">
          <h3 className="text-3xl md:text-4xl font-semibold text-text-primary mb-3 text-center">
            Latest Articles
          </h3>

          <p className="text-text-tertiary text-lg md:text-xl font-normal text-center">
            Learn about Muslim Naming, Parenting and more…
          </p>
        </div>

        <BlogCardSection
          blogs={blogs}
          isError={isError}
          isLoading={isLoading}
        />
      </div>
    </main>
  );
};

export default BlogView;
