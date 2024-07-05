import type { Metadata, NextPage } from 'next';
import dynamic from 'next/dynamic';
const NameSearchView = dynamic(
  () => import('@/components/view/NameSearchView'),
);

export const metadata: Metadata = {
  title: 'Name Search',
  description: 'This is name search page.',
};

const NameSearchPage: NextPage = () => {
  return <NameSearchView />;
};

export default NameSearchPage;
