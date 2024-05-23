'use client';

import DashboardIcon from '@/assets/icons/DashboardIcon';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import AdminNavList from '../navs/AdminNavList';

const AdminLink = ({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children: any;
}) => {
  const activePath = usePathname();

  return (
    <Link
      href={href}
      className={`text-text-secondary-hover font-semibold flex gap-3 items-center hover:bg-border-secondary p-1 rounded-md ${
        activePath === href && 'bg-border-secondary'
      }`}
    >
      {children}

      <span>{title}</span>
    </Link>
  );
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const navRef = useRef<HTMLDivElement>(null);
  const [openNav, setOpenNav] = useState(false);

  const handleClickOutside = useCallback((event: any) => {
    if (navRef.current && navRef?.current?.contains(event.target)) {
      return setOpenNav(true);
    }

    return setOpenNav(false);
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return (
    <>
      <div className="max-w-[1600px] mx-auto md:hidden">
        <header className="bg-white py-4 px-[6px] relative">
          <div className="w-full flex justify-between items-center mx-auto">
            <div className="md:h-16 md:w-44 relative w-[88px] h-8">
              <Link
                href="/"
                className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start"
              >
                <Image fill alt="Noble Names Logo" src="/images/logo.png" />
              </Link>
            </div>

            <div className="p-2">
              <svg
                className="cursor-pointer"
                onClick={() => setOpenNav((prev) => !prev)}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="menu-02">
                  <path
                    id="Icon"
                    d="M3 12H15M3 6H21M3 18H21"
                    stroke="#344054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </div>
          </div>

          {openNav && (
            <div ref={navRef}>
              <AdminNavList />
            </div>
          )}
        </header>

        {children}
      </div>

      <div className="max-w-[1600px] mx-auto hidden md:flex">
        <aside className="w-[310px] h-screen flex flex-col justify-between px-6 py-4 bg-white border-r border-border-secondary">
          <div>
            <div className="md:h-16 md:w-44 relative w-[88px] h-8 mb-6">
              <Link
                href="/"
                className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start"
              >
                <Image fill alt="Noble Names Logo" src="/images/logo.png" />
              </Link>
            </div>

            <div className="flex flex-col gap-5">
              <AdminLink href="/admin/dashboard" title="Dashboard">
                <DashboardIcon />
              </AdminLink>

              <AdminLink href="/admin/name" title="Name">
                <DashboardIcon />
              </AdminLink>

              <AdminLink href="/admin/name-requested" title="Name Requested">
                <DashboardIcon />
              </AdminLink>

              <AdminLink href="/admin/blog" title="Blog">
                <DashboardIcon />
              </AdminLink>
            </div>
          </div>

          <AdminLink href="/admin/dashboard" title="Dashboard">
            <DashboardIcon />
          </AdminLink>
        </aside>

        <div className="w-[1200px] py-14 px-8 bg-gray-bg h-screen overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
