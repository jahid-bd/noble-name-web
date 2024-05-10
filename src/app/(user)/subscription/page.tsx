import type { NextPage } from 'next';

import PreLoader from '@/components/loader/Loader';
import dynamic from 'next/dynamic';

const SubscriptionView = dynamic(
  () => import('@/components/view/SubscriptionView'),
  {
    loading: () => <PreLoader />,
  }
);

const Subscription: NextPage = () => {
  return <SubscriptionView />;
};

export default Subscription;
