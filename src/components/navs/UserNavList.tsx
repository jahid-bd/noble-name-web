'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const UserNavList = ({ handleLogout }: { handleLogout: () => void }) => {
  const pathname = usePathname();

  return (
    <div className="absolute right-0 top-[52px] md:top-[72px]">
      <div className="flex flex-col gap-2 bg-white rounded py-3 border border-border-primary">
        <Link
          href="/dashboard"
          className={`py-1 px-3 hover:bg-border-primary ${
            pathname === '/dashboard' ? 'bg-border-primary' : ''
          }`}
        >
          Dashboard
        </Link>
        <Link
          href="/settings"
          className={`py-1 px-3 hover:bg-border-primary ${
            pathname === '/settings' ? 'bg-border-primary' : ''
          }`}
        >
          Setting
        </Link>
        <Link
          href="/subscription"
          className={`py-1 px-3 hover:bg-border-primary ${
            pathname === '/subscription' ? 'bg-border-primary' : ''
          }`}
        >
          Subscription
        </Link>

        <div className="py-1 hover:bg-border-primary">
          <button type="button" className="px-3" onClick={() => handleLogout()}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserNavList;
