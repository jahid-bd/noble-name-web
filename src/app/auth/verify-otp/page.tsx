import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
const OtpVerifyView = dynamic(() => import('@/components/view/OtpVerifyView'));

const VerifyOtp: NextPage = () => {
  return <OtpVerifyView />;
};

export default VerifyOtp;
