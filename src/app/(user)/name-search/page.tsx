import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
const NameSearchView = dynamic(
  () => import('@/components/view/NameSearchView'),
);

const NameSearchPage: NextPage = () => {
  return <NameSearchView />;
};

export default NameSearchPage;
