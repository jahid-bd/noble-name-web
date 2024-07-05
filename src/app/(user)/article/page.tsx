import type { Metadata, NextPage } from 'next';
import dynamic from 'next/dynamic';
const BlogView = dynamic(() => import('@/components/view/BlogView'));

export const metadata: Metadata = {
  title: 'Article',
  description: 'This is article page.',
};

const Blog: NextPage = () => {
  return <BlogView />;
};

export default Blog;
