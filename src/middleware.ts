import { jwtDecode } from 'jwt-decode';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const access_token: string | undefined =
    request.cookies.get('access_token')?.value;

  const user: any = access_token && jwtDecode(access_token);

  // console.log(user, access_token, console.log(request.cookies.getAll()));

  const adminRoutes = [
    '/admin/name',
    '/admin/article',
    '/admin/csv-download',
    '/admin/dashboard',
    '/admin/name-requested',
  ];

  const publicRoutes = [
    '/auth/sign-in',
    '/auth/sign-up',
    '/auth/verify-otp',
    '/auth/forgot-password',
    '/auth/reset-password',
  ];

  const userRoutes = [
    '/name-search',
    '/dashboard',
    '/settings',
    '/subscription',
    '/membership-plan',
  ];

  const path = request?.nextUrl?.pathname;

  const isAdminRoute = adminRoutes.includes(path);
  const isPublicRoute = publicRoutes.includes(path);
  const isUserRoute = userRoutes.includes(path);
  const isAdmin = user && user?.role === 'admin' ? true : false;

  if (!user && isUserRoute) {
    return NextResponse.redirect(new URL('/auth/sign-in', request.url));
  }

  if (user && isPublicRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (user && !isAdmin && isAdminRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }
}

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
