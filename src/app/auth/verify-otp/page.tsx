import type { Metadata, NextPage } from 'next';
import dynamic from 'next/dynamic';
const OtpVerifyView = dynamic(() => import('@/components/view/OtpVerifyView'));

export const metadata: Metadata = {
  title: 'Verify OTP - Noble Names',
  description: 'This is verify OTP page.',
};

const VerifyOtp: NextPage = () => {
  return <OtpVerifyView />;
};

export default VerifyOtp;
