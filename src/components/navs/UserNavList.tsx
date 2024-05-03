import Link from 'next/link';

const UserNavList = () => {
  return (
    <div className="absolute right-0 top-[52px] md:top-[72px]">
      <div className="flex flex-col gap-2 bg-white rounded py-3 border border-border-primary">
        <Link href="/dashboard" className="py-1 px-3 hover:bg-border-primary">
          Dashboard
        </Link>
        <Link href="/settings" className="py-1 px-3 hover:bg-border-primary">
          Setting
        </Link>
        <Link
          href="/subscription"
          className="py-1 px-3 hover:bg-border-primary"
        >
          Subscription
        </Link>

        <Link
          href="/subscription"
          className="py-1 px-3 hover:bg-border-primary"
        >
          Logout
        </Link>
      </div>
    </div>
  );
};

export default UserNavList;
