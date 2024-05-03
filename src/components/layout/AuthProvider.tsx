'use client';

import { getUserProfile } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { redirect, usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const userRoutes = ['/'];
  const adminRoutes = [''];

  const path = usePathname();

  const isUserRoute = userRoutes.includes(path);
  const isAdminRoute = adminRoutes.includes(path);

  const { data: user, isFetching } = useQuery({
    queryKey: ['user'],
    queryFn: getUserProfile,
    // enabled: isUserRoute || isAdminRoute,
  });

  const isAuthneticate = Boolean(user?._id);
  const isAdmin = user?.role === 'admin';

  if (!isFetching) {
    if (isUserRoute && !isAuthneticate) return redirect('auth/sign-in');

    if (isAdminRoute && !isAdmin) return redirect('/');
  }

  // if (isFetching)
  //   return (
  //     <h1 className="text-primary text-4xl text-center mt-10">Loading...</h1>
  //   );

  return <>{children}</>;
};

export default AuthProvider;
