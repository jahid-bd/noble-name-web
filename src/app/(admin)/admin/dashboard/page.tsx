import PreLoader from '@/components/loader/Loader';
import AdminDashboardView from '@/components/view/AdminDashboard';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'This is dashboard page.',
};

const AdminDashboard = () => {
  return (
    <Suspense fallback={<PreLoader />}>
      <AdminDashboardView />
    </Suspense>
  );
};

export default AdminDashboard;
