import type { Metadata, NextPage } from 'next';
import dynamic from 'next/dynamic';
const TwoFaOtpVerifyView = dynamic(
  () => import('@/components/view/TwoFaOtpVerifyView'),
);

export const metadata: Metadata = {
  title: '2FA OTP Verify - Noble Names',
  description: 'This is 2 FA OTP verify page.',
};

const VerifyOtpFor2Fa: NextPage = () => {
  return <TwoFaOtpVerifyView />;
};

export default VerifyOtpFor2Fa;
