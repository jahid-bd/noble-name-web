import PreLoader from '@/components/loader/Loader';
import AdminNameView from '@/components/view/AdminNameView';
import { Suspense } from 'react';

const NamePage = () => {
  return (
    <Suspense fallback={<PreLoader />}>
      <AdminNameView />
    </Suspense>
  );
};

export default NamePage;
