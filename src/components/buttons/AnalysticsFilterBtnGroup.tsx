'use client';

import { formatISO, subDays } from 'date-fns';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const AnalyticsFilterGroupBtn = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get('to');
  const type = searchParams.get('form');

  return (
    <div className="border rounded-md border-border-primary overflow-hidden w-fit bg-white">
      <Link
        href={{
          query: {
            to: formatISO(subDays(new Date(), 365)),
            form: formatISO(new Date()),
          },
        }}
        type="button"
        className="text-text-secondary font-semibol"
      >
        <button type="button" className={`px-3 py-2 font-semibold'}`}>
          12 months
        </button>
      </Link>

      <Link
        href={{
          query: {
            to: formatISO(subDays(new Date(), 30)),
            form: formatISO(new Date()),
          },
        }}
        className="py-2 text-text-secondary font-semibold  border-x border-border-primary"
      >
        <button
          type="button"
          className={`px-3 py-2 font-semibold ${
            type == 'boy' ? 'bg-gray-bg' : ''
          }`}
        >
          30 days
        </button>
      </Link>

      <Link
        href={{
          query: {
            to: formatISO(subDays(new Date(), 7)),
            form: formatISO(new Date()),
          },
        }}
        className="text-text-secondary font-semibold py-2 border-r border-border-primary"
      >
        <button
          type="button"
          className={`px-3 py-2 font-semibold ${
            type == 'girl' ? 'bg-gray-bg' : ''
          }`}
        >
          7 days
        </button>
      </Link>

      <Link
        href={{
          query: {
            to: formatISO(subDays(new Date(), 1)),
            form: formatISO(new Date()),
          },
        }}
        className="text-text-secondary font-semibold"
      >
        <button
          type="button"
          className={`px-3 py-2 font-semibold ${
            type == 'girl' ? 'bg-gray-bg' : ''
          }`}
        >
          24 hours
        </button>
      </Link>
    </div>
  );
};

export default AnalyticsFilterGroupBtn;
