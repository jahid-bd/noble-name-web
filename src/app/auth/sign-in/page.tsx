import PreLoader from '@/components/loader/Loader';
import dynamic from 'next/dynamic';

const SignInView = dynamic(() => import('@/components/view/SignInView'), {
  loading: () => <PreLoader />,
});

const SignInPage = () => {
  return <SignInView />;
};

export default SignInPage;
