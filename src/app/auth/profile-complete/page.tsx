import PreLoader from '@/components/loader/Loader';
import dynamic from 'next/dynamic';

const ProfileComplete = dynamic(
  () => import('@/components/view/ProfileCompleteView'),
  {
    loading: () => <PreLoader />,
  }
);

const page = () => {
  return <ProfileComplete />;
};

export default page;
