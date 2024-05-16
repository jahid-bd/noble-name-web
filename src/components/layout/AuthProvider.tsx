'use client';

import { getUserProfile } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { redirect, usePathname } from 'next/navigation';
import { ReactNode } from 'react';
import PreLoader from '../loader/Loader';

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const userRoutes = [
    '/settings',
    '/name-search',
    '/subscription',
    'dashboard?tab=favorites',
  ];
  const adminRoutes = [
    '/admin/name',
    '/admin/blog',
    '/admin/dashboard',
    '/admin/name-requested',
  ];
  const publicRoutes = [
    '/auth/sign-in',
    '/auth/sign-up',
    '/auth/verify-otp',
    '/auth/forgot-password',
    '/auth/reset-password',
    '/auth/reset-password',
  ];

  const path = usePathname();

  const isUserRoute = userRoutes.includes(path);
  const isAdminRoute = adminRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);

  const { data: user, isFetching } = useQuery({
    queryKey: ['user'],
    queryFn: getUserProfile,
    // enabled: isUserRoute || isAdminRoute,
  });

  const isAuthneticate = Boolean(user?._id);
  const isAdmin = user?.role === 'admin';

  if (isAuthneticate && isPublicRoute && !isAdmin) {
    redirect('/');
  }

  if (isAuthneticate && isPublicRoute && isAdmin) {
    redirect('/admin/dashboard');
  }

  if (isUserRoute && !isAuthneticate) return redirect('auth/sign-in');

  if (isAdminRoute && !isAdmin) return redirect('/');

  return (
    <>
      {isFetching ? (
        <div className="w-full h-screen justify-center items-center">
          <PreLoader />
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default AuthProvider;
