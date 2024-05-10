import type { NextPage } from 'next';

import PreLoader from '@/components/loader/Loader';
import dynamic from 'next/dynamic';

const BlogDetailView = dynamic(
  () => import('@/components/view/BlogDetailView'),
  {
    loading: () => <PreLoader />,
  }
);

const BlogDetail: NextPage = () => {
  return <BlogDetailView />;
};

export default BlogDetail;
