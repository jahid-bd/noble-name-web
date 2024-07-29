import PreLoader from '@/components/loader/Loader';
import AdminNameRequestView from '@/components/view/AdminRequestNameView';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Name Request',
  description: 'This is name request page.',
};

const NameRequestedPage = () => {
  return (
    <Suspense fallback={<PreLoader />}>
      <AdminNameRequestView />
    </Suspense>
  );
};

export default NameRequestedPage;
