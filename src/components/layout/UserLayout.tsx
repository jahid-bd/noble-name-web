'use client';

import { getUserProfile, userLogout } from '@/services/api';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import UserNavList from '../navs/UserNavList';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const [openNav, setOpenNav] = useState(false);
  const queryClient = useQueryClient();

  const router = useRouter();

  const closeNav = () => {
    setOpenNav(!openNav);
  };

  const handleClickOutside = useCallback((event: any) => {
    if (navRef.current && navRef?.current?.contains(event.target)) {
      return setOpenNav(true);
    }

    return setOpenNav(false);
  }, []);

  const { data: user, isError } = useQuery({
    queryKey: ['logged-in-user'],
    queryFn: getUserProfile,
  });

  const { mutate: handleLogout } = useMutation({
    mutationFn: userLogout,
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: (data: any) => {
      toast.success('user logout successfully.');
      Cookies.remove('access_token');
      queryClient.invalidateQueries({ queryKey: ['logged-in-user'] });
      router.push('/auth/sign-in');
    },
  });

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return (
    <>
      <header className="bg-border-tertiary py-4 px-[6px] sticky top-0 z-[9999999999] shadow-md">
        <div className="container px-1.5 flex justify-between items-center mx-auto">
          <div className="w-[120px] md:w-44 h-12 md:h-16 relative">
            <Link
              href="/"
              className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start"
            >
              <Image fill alt="Noble Names Logo" src="/images/logo.png" />
            </Link>
          </div>

          {!isError && user ? (
            <div className="relative">
              <div className="flex gap-3 items-center bg-white p-2 md:p-3 shadow-menu rounded-full">
                <svg
                  className="cursor-pointer"
                  onClick={() => setOpenNav((prev) => !prev)}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 12H21M3 6H21M3 18H21"
                    stroke="#344054"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <div className="md:h-10 md:w-10 relative w-[30px] h-[30px] rounded-full overflow-hidden flex justify-center items-center">
                  {/* <Image fill alt="Noble Names Logo" src="/images/Avatar.png" /> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40px"
                    height="40px"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M5 20v-1a7 7 0 0 1 7-7v0a7 7 0 0 1 7 7v1m-7-8a4 4 0 1 0 0-8a4 4 0 0 0 0 8"
                    />
                  </svg>
                </div>
              </div>

              {openNav && !isError && user && (
                <div ref={navRef}>
                  <UserNavList
                    handleLogout={handleLogout}
                    closeNav={closeNav}
                  />
                </div>
              )}
            </div>
          ) : (
            <Link href="/auth/sign-in" className="text-primary">
              Sign In
            </Link>
          )}
        </div>
      </header>

      <div className="min-h-[400px]">{children}</div>

      <footer className="py-8 bg-primary">
        <div className="container py-4 px-[6px] mx-auto">
          <div className="flex flex-col md:flex-row gap-5 items-center justify-center font-normal text-white text-base mb-5">
            <Link href="/about-us">About Us</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/fair-use-policy">Terms & Conditions</Link>
            <Link href="/contact-us">Contact Us</Link>
          </div>

          <p className="text-center text-white text-base font-semibold">
            &copy; {new Date().getFullYear()} Noble Names
          </p>
        </div>
      </footer>
    </>
  );
};

export default UserLayout;
