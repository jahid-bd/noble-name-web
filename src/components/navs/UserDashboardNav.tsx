'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface LinkType {
  path: string;
  title: string;
  query?: object;
}

const NavLink = ({ path, title, query = {} }: LinkType) => {
  const activePath = usePathname();

  return (
    <Link
      href={{ pathname: path, query: { ...query } }}
      className={`text-center px-3 py-2 rounded-md text-xs md:text-lg font-medium ${
        activePath === path ? 'bg-primary text-white' : 'text-text-black'
      }`}
    >
      {title}
    </Link>
  );
};

const UserDashboardNav = () => {
  return (
    <div className="grid grid-cols-3 bg-teal rounded-md mb-6">
      <NavLink
        path="/dashboard"
        query={{ tab: 'favorites', type: 'all' }}
        title="Dashboard"
      />
      <NavLink path="/settings" title="Settings" />
      <NavLink path="/subscription" title="Subscriptions" />
    </div>
  );
};

export default UserDashboardNav;
