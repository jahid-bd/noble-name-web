import dynamic from 'next/dynamic';
const SignupView = dynamic(() => import('@/components/view/SignupView'));

import type { NextPage } from 'next';

const SignUp: NextPage = () => {
  return <SignupView />;
};

export default SignUp;
