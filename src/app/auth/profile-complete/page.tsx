import dynamic from 'next/dynamic';
const ProfileComplete = dynamic(
  () => import('@/components/view/ProfileCompleteView'),
);

const page = () => {
  return <ProfileComplete />;
};

export default page;
