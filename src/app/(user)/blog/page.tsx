import type { NextPage } from 'next';

import PreLoader from '@/components/loader/Loader';
import dynamic from 'next/dynamic';

const BlogView = dynamic(() => import('@/components/view/BlogView'), {
  loading: () => <PreLoader />,
});

const Blog: NextPage = () => {
  return <BlogView />;
};

export default Blog;
