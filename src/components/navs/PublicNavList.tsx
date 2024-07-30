'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const PublicNavList = ({ closeNav }: { closeNav?: () => void }) => {
  const pathname = usePathname();

  return (
    <div className="absolute right-0 top-[52px] md:top-[72px] z-[999999] w-[150px]">
      <div className="flex flex-col gap-2 bg-white rounded py-3 border border-border-primary">
        <Link
          href="/auth/sign-up"
          className={`py-1 px-3 hover:bg-border-primary ${
            pathname === '/auth/sign-up' ? 'bg-border-primary' : ''
          }`}
          onClick={closeNav}
        >
          Sign Up
        </Link>
        <Link
          href="/auth/sign-in"
          className={`py-1 px-3 hover:bg-border-primary ${
            pathname === '/auth/sign-in' ? 'bg-border-primary' : ''
          }`}
          onClick={closeNav}
        >
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default PublicNavList;
