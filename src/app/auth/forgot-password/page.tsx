import ForgotPasswordView from '@/components/view/ForgotPasswordView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Forgot Password - Noble Names',
  description: 'This is forgot password page.',
};

const ForgotPass = () => {
  return <ForgotPasswordView />;
};

export default ForgotPass;
