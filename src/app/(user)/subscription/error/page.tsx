import ErrorView from '@/components/view/ErrorView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Error - Noble Names',
  description: 'This is error page.',
};

const Error = () => {
  return <ErrorView />;
};

export default Error;
