import NotFoundView from '@/components/view/NotFoundView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'This is not found page.',
};

const page = () => {
  return <NotFoundView />;
};

export default page;
