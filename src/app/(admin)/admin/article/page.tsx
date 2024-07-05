import type { Metadata, NextPage } from 'next';
import dynamic from 'next/dynamic';
const AdminBlogView = dynamic(() => import('@/components/view/AdminBlogView'), {
  ssr: false,
});

export const metadata: Metadata = {
  title: 'Article',
  description: 'This is article page.',
};

const BlogPage: NextPage = () => {
  return <AdminBlogView />;
};

export default BlogPage;
