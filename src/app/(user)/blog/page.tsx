import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
const BlogView = dynamic(() => import('@/components/view/BlogView'));

const Blog: NextPage = () => {
  return <BlogView />;
};

export default Blog;
