'use client';

import DashboardIcon from '@/assets/icons/DashboardIcon';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const AdminLink = ({ href, title }: { href: string; title: string }) => {
  const activePath = usePathname();

  return (
    <Link
      href={href}
      className={`text-text-secondary-hover font-semibold flex gap-3 items-center hover:bg-border-secondary p-1 rounded-md ${
        activePath === href && 'bg-border-secondary'
      }`}
    >
      <DashboardIcon />

      <span>{title}</span>
    </Link>
  );
};

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="max-w-[1600px] mx-auto md:hidden">
        <header className="bg-white py-4 px-[6px]">
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
              <AdminLink href="/admin/dashboard" title="Dashboard" />
              <AdminLink href="/admin/name" title="Name" />
              <AdminLink href="/admin/name-requested" title="Name Request" />
              <AdminLink href="/admin/blog" title="Blog" />
            </div>
          </div>

          {/* <div className="flex flex-col gap-5">
            <AdminLink href="/" title="Support Request" />
            <AdminLink href="/" title="Setting" />
          </div> */}
        </aside>

        <div className="w-[1200px] py-14 px-8 bg-gray-bg h-screen overflow-y-auto">
          {children}
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
