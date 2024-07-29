import { Metadata } from 'next';
import dynamic from 'next/dynamic';
const ProfileComplete = dynamic(
  () => import('@/components/view/ProfileCompleteView'),
);

export const metadata: Metadata = {
  title: 'Profile Complete - Noble Names',
  description: 'This is profile complete page.',
};

const page = () => {
  return <ProfileComplete />;
};

export default page;
