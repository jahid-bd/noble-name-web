import Link from 'next/link';

const AdminNavList = ({ handleLogout }: { handleLogout: any }) => {
  return (
    <div className="absolute right-1.5 top-[52px] md:top-[72px] z-50">
      <div className="flex flex-col gap-2 bg-white rounded py-3 border border-border-primary">
        <Link
          href="/admin/dashboard"
          className="py-1 px-3 hover:bg-border-primary"
        >
          Dashboard
        </Link>
        <Link href="/admin/name" className="py-1 px-3 hover:bg-border-primary">
          Name
        </Link>
        <Link
          href="/admin/name-requested"
          className="py-1 px-3 hover:bg-border-primary"
        >
          New Name Request
        </Link>

        <Link href="/admin/blog" className="py-1 px-3 hover:bg-border-primary">
          Blog
        </Link>

        <Link href="/settings" className="py-1 px-3 hover:bg-border-primary">
          Settings
        </Link>
        <button
          type="button"
          className="py-1 px-3 hover:bg-border-primary text-left"
          onClick={() => handleLogout()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminNavList;
