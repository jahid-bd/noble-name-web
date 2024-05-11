import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
const ContactView = dynamic(() => import('@/components/view/DashboardView'));

const Dashboard: NextPage = () => {
  return <ContactView />;
};

export default Dashboard;
