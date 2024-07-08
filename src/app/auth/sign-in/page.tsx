import { Metadata } from 'next';
import dynamic from 'next/dynamic';
const SignInView = dynamic(() => import('@/components/view/SignInView'));

export const metadata: Metadata = {
  title: 'Sign In - Noble Names',
  description: 'This is sign in page.',
};

const SignInPage = () => {
  return <SignInView />;
};

export default SignInPage;
