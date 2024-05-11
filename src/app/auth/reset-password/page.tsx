import dynamic from 'next/dynamic';
const ResetPasswordView = dynamic(
  () => import('@/components/view/ResetPasswordView'),
);

const page = () => {
  return <ResetPasswordView />;
};

export default page;
