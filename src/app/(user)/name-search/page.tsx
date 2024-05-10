import type { NextPage } from 'next';

import PreLoader from '@/components/loader/Loader';
import dynamic from 'next/dynamic';

const NameSearchView = dynamic(
  () => import('@/components/view/NameSearchView'),
  {
    loading: () => <PreLoader />,
  }
);

const NameSearchPage: NextPage = () => {
  return <NameSearchView />;
};

export default NameSearchPage;
