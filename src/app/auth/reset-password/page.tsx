import { Metadata } from 'next';
import dynamic from 'next/dynamic';
const ResetPasswordView = dynamic(
  () => import('@/components/view/ResetPasswordView'),
);

export const metadata: Metadata = {
  title: 'Reset Password',
  description: 'This is reset password page.',
};

const page = () => {
  return <ResetPasswordView />;
};

export default page;
