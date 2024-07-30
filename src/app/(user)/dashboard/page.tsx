import type { Metadata, NextPage } from 'next';
import dynamic from 'next/dynamic';
const ContactView = dynamic(() => import('@/components/view/DashboardView'));

export const metadata: Metadata = {
  title: 'Dashboard - Noble Names',
  description: 'This is dashboard page.',
};

const Dashboard: NextPage = () => {
  return <ContactView />;
};

export default Dashboard;
