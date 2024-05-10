import PreLoader from '@/components/loader/Loader';
import AdminDashboardView from '@/components/view/AdminDashboard';
import { Suspense } from 'react';

const AdminDashboard = () => {
  return (
    <Suspense fallback={<PreLoader />}>
      <AdminDashboardView />
    </Suspense>
  );
};

export default AdminDashboard;
