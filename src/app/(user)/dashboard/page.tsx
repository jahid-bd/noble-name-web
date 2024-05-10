import PreLoader from '@/components/loader/Loader';
import dynamic from 'next/dynamic';

import type { NextPage } from 'next';

const ContactView = dynamic(() => import('@/components/view/DashboardView'), {
  loading: () => <PreLoader />,
});

const Dashboard: NextPage = () => {
  return <ContactView />;
};

export default Dashboard;
