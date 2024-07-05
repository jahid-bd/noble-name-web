'use client';

import UserLayout from '@/components/layout/UserLayout';
import NotFound from '@/components/loader/NotFound';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'This is not found page.',
};

const page = () => {
  return (
    <UserLayout>
      <NotFound />
    </UserLayout>
  );
};

export default page;
