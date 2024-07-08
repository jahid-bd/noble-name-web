import SuccessView from '@/components/view/SuccessView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Success - Noble Names',
  description: 'This is success page.',
};

const Success = () => {
  return <SuccessView />;
};

export default Success;
