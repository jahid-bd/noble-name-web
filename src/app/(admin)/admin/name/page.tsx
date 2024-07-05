import PreLoader from '@/components/loader/Loader';
import AdminNameView from '@/components/view/AdminNameView';
import { Metadata } from 'next';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Name',
  description: 'This is name page.',
};

const NamePage = () => {
  return (
    <Suspense fallback={<PreLoader />}>
      <AdminNameView />
    </Suspense>
  );
};

export default NamePage;
