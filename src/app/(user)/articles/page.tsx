import type { Metadata, NextPage } from 'next';
import dynamic from 'next/dynamic';
const BlogView = dynamic(() => import('@/components/view/BlogView'));

export const metadata: Metadata = {
  title: 'Articles on Muslim Naming and Parenting - Noble Names',
  description:
    'Read insightful articles on Muslim naming traditions, Islamic parenting, and child development at Noble Names.',
};

const Blog: NextPage = () => {
  return <BlogView />;
};

export default Blog;
