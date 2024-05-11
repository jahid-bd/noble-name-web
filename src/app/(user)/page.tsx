import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
const HomeView = dynamic(() => import('@/components/view/HomeView'));

const Homepage: NextPage = () => {
  return <HomeView />;
};

export default Homepage;
