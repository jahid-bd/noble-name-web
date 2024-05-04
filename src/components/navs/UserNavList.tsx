'use client';

import { userLogout } from '@/services/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Link from 'next/link';
import { toast } from 'react-toastify';

const UserNavList = () => {
  const queryClient = useQueryClient();

  const { mutate: handleLogout } = useMutation({
    mutationFn: userLogout,
    onError: (error: any) => {
      toast.error(error.message);
    },
    onSuccess: (data: any) => {
      toast.success('user logout successfully.');
      queryClient.invalidateQueries();
    },
  });

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

        <div className="py-1 hover:bg-border-primary">
          <button
            type="button"
            className="px-3"
            // href="/subscription"
            onClick={() => handleLogout()}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserNavList;
