'use client';

import { getUserProfile } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import UserNavList from '../navs/UserNavList';

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const [openNav, setOpenNav] = useState(false);

  const handleClickOutside = useCallback((event: any) => {
    if (navRef.current && navRef?.current?.contains(event.target)) {
      return setOpenNav(true);
    }

    return setOpenNav(false);
  }, []);

  const { data: user, isError } = useQuery({
    queryKey: ['logged-in-user'],
    queryFn: getUserProfile,
    // enabled: isUserRoute || isAdminRoute,
  });

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return (
    <>
      <header className="bg-border-tertiary py-4 px-[6px]">
        <div className="container px-1.5 flex justify-between items-center mx-auto">
          <div className="md:h-16 md:w-44 relative w-[88px] h-8">
            <Link
              href="/"
              className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start"
            >
              <Image fill alt="Noble Names Logo" src="/images/logo.png" />
            </Link>
          </div>

          {!user && (
            <Link href="/auth/sign-in" className="text-primary">
              Sign In
            </Link>
          )}

          {!isError && user && (
            <div className="relative">
              <div className="flex gap-4 items-center bg-white p-2 md:p-3 shadow-menu rounded-full">
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

                <div className="md:h-10 md:w-10 relative w-[30px] h-[30px] rounded-full overflow-hidden">
                  <Image fill alt="Noble Names Logo" src="/images/Avatar.png" />
                </div>
              </div>

              {openNav && !isError && user && (
                <div ref={navRef}>
                  <UserNavList />
                </div>
              )}
            </div>
          )}
        </div>
      </header>

      {children}

      <footer className="py-8 bg-primary">
        <div className="container py-4 px-[6px] mx-auto">
          <p className="text-center text-white text-base font-semibold mb-5">
            &copy; 2023 Noble Names
          </p>

          <div className="flex flex-col md:flex-row gap-5 items-center justify-center font-normal text-white text-base">
            <Link href="/fair-use-policy">Terms & Conditions</Link>
            <Link href="/fair-use-policy">Privacy Policy</Link>
            <Link href="/fair-use-policy">Fair Use Policy</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default UserLayout;
