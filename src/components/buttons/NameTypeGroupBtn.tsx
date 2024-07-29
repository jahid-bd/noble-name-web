'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const NameTypeGroupBtn = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('tab');
  const type = searchParams.get('type');

  return (
    <div className="border rounded-md border-border-primary overflow-hidden w-fit">
      <Link
        href={{ query: { tab: tab } }}
        type="button"
        className="text-text-secondary font-semibol"
      >
        <button
          type="button"
          className={`px-3 py-2 font-semibold ${type ? '' : 'bg-gray-bg'}`}
        >
          All
        </button>
      </Link>

      <Link
        href={{ query: { tab: tab, type: 'boy' } }}
        className="py-2 text-text-secondary font-semibold  border-x border-border-primary"
      >
        <button
          type="button"
          className={`px-3 py-2 font-semibold ${
            type == 'boy' ? 'bg-gray-bg' : ''
          }`}
        >
          Boys
        </button>
      </Link>

      <Link
        href={{ query: { tab: tab, type: 'girl' } }}
        className="text-text-secondary font-semibold"
      >
        <button
          type="button"
          className={`px-3 py-2 font-semibold ${
            type == 'girl' ? 'bg-gray-bg' : ''
          }`}
        >
          Girls
        </button>
      </Link>
    </div>
  );
};

export default NameTypeGroupBtn;
