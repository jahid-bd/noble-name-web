import type { NextPage } from 'next';

import PreLoader from '@/components/loader/Loader';
import dynamic from 'next/dynamic';

const OtpVerifyView = dynamic(() => import('@/components/view/OtpVerifyView'), {
  loading: () => <PreLoader />,
});

const VerifyOtp: NextPage = () => {
  return <OtpVerifyView />;
};

export default VerifyOtp;
