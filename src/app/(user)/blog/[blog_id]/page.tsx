import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
const BlogDetailView = dynamic(
  () => import('@/components/view/BlogDetailView'),
);

const BlogDetail: NextPage = () => {
  return <BlogDetailView />;
};

export default BlogDetail;
