import type { Metadata, NextPage } from 'next';
import dynamic from 'next/dynamic';
const HomeView = dynamic(() => import('@/components/view/HomeView'));

export const metadata: Metadata = {
  title: 'Find the Perfect Muslim Baby Name - Noble Names',
  description:
    'Discover beautiful and meaningful Muslim baby names with our state-of-the-art search facility. Explore names by meaning, full name, and more at Noble Names.',
};

const Homepage: NextPage = () => {
  return <HomeView />;
};

export default Homepage;
