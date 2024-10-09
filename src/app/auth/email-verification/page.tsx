import EmailVerificationPage from '@/components/view/EmailVerificationPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Email Verify - Noble Names',
  description: 'This is email verify page.',
};

const EmailVerification = () => {
  return <EmailVerificationPage />;
};

export default EmailVerification;
