import type { NextPage } from 'next';

import PreLoader from '@/components/loader/Loader';
import dynamic from 'next/dynamic';

const AdminBlogView = dynamic(() => import('@/components/view/AdminBlogView'), {
  loading: () => <PreLoader />,
  ssr: false,
});

const BlogPage: NextPage = () => {
  return <AdminBlogView />;
};

export default BlogPage;
