'use client';

import BlogIcon from '@/assets/icons/BlogIcon';
import DatabaseIcon from '@/assets/icons/DatabaseIcon';
import LogoutIcon from '@/assets/icons/LogoutIcon';
import NameIcon from '@/assets/icons/NameIcon';
import SearchIcon from '@/assets/icons/SearchIcon';
import SettingIcon from '@/assets/icons/SettingIcon';
import { userLogout } from '@/services/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
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
  const queryClient = useQueryClient();

  const router = useRouter();

  const { mutate: handleLogout } = useMutation({
    mutationFn: userLogout,
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: (data: any) => {
      toast.success('user logout successfully.');
      queryClient.invalidateQueries({ queryKey: ['logged-in-user'] });
      router.push('/auth/sign-in');
    },
  });

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
              <AdminNavList handleLogout={handleLogout} />
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
                <SearchIcon />
              </AdminLink>

              <AdminLink href="/admin/name" title="Name">
                <DatabaseIcon />
              </AdminLink>

              <AdminLink href="/admin/name-requested" title="New Name Request">
                <NameIcon />
              </AdminLink>

              <AdminLink href="/admin/article" title="Article">
                <BlogIcon />
              </AdminLink>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <AdminLink href="/settings" title="Settings">
              <SettingIcon />
            </AdminLink>

            <button
              type="button"
              className="text-text-secondary-hover font-semibold flex gap-3 items-center hover:bg-border-secondary p-1 rounded-md"
              onClick={() => handleLogout()}
            >
              <LogoutIcon />

              <span>Logout</span>
            </button>
          </div>
        </aside>

        <div className="w-[1200px] py-14 px-8 bg-gray-bg h-screen overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
