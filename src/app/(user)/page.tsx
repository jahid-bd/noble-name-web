import type { NextPage } from 'next';

import PreLoader from '@/components/loader/Loader';
import dynamic from 'next/dynamic';

const HomeView = dynamic(() => import('@/components/view/HomeView'), {
  loading: () => <PreLoader />,
});

const Homepage: NextPage = () => {
  return <HomeView />;
};

export default Homepage;
