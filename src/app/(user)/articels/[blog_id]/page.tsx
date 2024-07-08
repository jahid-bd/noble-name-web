import type { Metadata, NextPage } from 'next';
import dynamic from 'next/dynamic';
const BlogDetailView = dynamic(
  () => import('@/components/view/BlogDetailView'),
);

export const metadata: Metadata = {
  title: 'Article Details',
  description: 'This is article  details page.',
};

const BlogDetail: NextPage = () => {
  return <BlogDetailView />;
};

export default BlogDetail;
