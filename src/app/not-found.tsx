'use client';

import UserLayout from '@/components/layout/UserLayout';
import NotFound from '@/components/loader/NotFound';

const page = () => {
  return (
    <UserLayout>
      <NotFound />
    </UserLayout>
  );
};

export default page;
