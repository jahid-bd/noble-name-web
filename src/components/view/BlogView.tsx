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
