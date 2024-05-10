import PreLoader from '@/components/loader/Loader';
import dynamic from 'next/dynamic';

const ResetPasswordView = dynamic(
  () => import('@/components/view/ResetPasswordView'),
  {
    loading: () => <PreLoader />,
  },
);

const page = () => {
  return <ResetPasswordView />;
};

export default page;
