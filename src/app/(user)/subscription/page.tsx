import type { Metadata, NextPage } from 'next';

import PreLoader from '@/components/loader/Loader';
import dynamic from 'next/dynamic';

const SubscriptionView = dynamic(
  () => import('@/components/view/SubscriptionView'),
  {
    loading: () => <PreLoader />,
  },
);

export const metadata: Metadata = {
  title: 'Subscription - Noble Names',
  description: 'This is Subscription page.',
};

const Subscription: NextPage = () => {
  return <SubscriptionView />;
};

export default Subscription;
