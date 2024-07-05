import type { Metadata, NextPage } from 'next';
import dynamic from 'next/dynamic';
const HomeView = dynamic(() => import('@/components/view/HomeView'));

export const metadata: Metadata = {
  title: 'Home',
  description: 'This is home page.',
};

const Homepage: NextPage = () => {
  return <HomeView />;
};

export default Homepage;
