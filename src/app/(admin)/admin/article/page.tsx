import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const AdminBlogView = dynamic(() => import('@/components/view/AdminBlogView'), {
  ssr: false,
});

const BlogPage: NextPage = () => {
  return <AdminBlogView />;
};

export default BlogPage;
