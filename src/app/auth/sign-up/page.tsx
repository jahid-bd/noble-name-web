import { Metadata } from 'next';
import dynamic from 'next/dynamic';
const SignupView = dynamic(() => import('@/components/view/SignupView'));

export const metadata: Metadata = {
  title: 'Sign Up',
  description: 'This is sign up page.',
};

import type { NextPage } from 'next';

const SignUp: NextPage = () => {
  return <SignupView />;
};

export default SignUp;
