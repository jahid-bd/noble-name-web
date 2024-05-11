import dynamic from 'next/dynamic';
const SignInView = dynamic(() => import('@/components/view/SignInView'));

const SignInPage = () => {
  return <SignInView />;
};

export default SignInPage;
