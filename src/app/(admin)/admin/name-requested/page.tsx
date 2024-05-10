import PreLoader from '@/components/loader/Loader';
import AdminNameRequestView from '@/components/view/AdminRequestNameView';
import { Suspense } from 'react';

const NameRequestedPage = () => {
  return (
    <Suspense fallback={<PreLoader />}>
      <AdminNameRequestView />
    </Suspense>
  );
};

export default NameRequestedPage;
