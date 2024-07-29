'use client';

import ArrowLeftIcon from '@/assets/icons/ArrowLeftIcon';
import ArrowRightIcon from '@/assets/icons/ArrowRightIcon';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

interface GlobalPaginationProps {
  totalPage: number;
  page: number;
}

const GlobalPagination = ({
  page = 0,
  totalPage = 0,
}: GlobalPaginationProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      params;

      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="flex justify-between items-center">
      <button
        type="button"
        disabled={page <= 1 && true}
        onClick={() => {
          router.push(
            pathname + '?' + createQueryString('page', `${Number(page) - 1}`),
          );
        }}
        className={`text-sm font-semibold text-text-secondary px-3 py-2 rounded-md border border-border-secondary ${
          page <= 1 ? 'bg-border-secondary' : ''
        }`}
      >
        <span className="block md:hidden">
          <ArrowLeftIcon />
        </span>
        <span className="hidden md:block">Previous</span>
      </button>

      <p className="text-sm font-medium text-text-secondary">
        Page {page} of {totalPage}
      </p>

      <button
        type="button"
        disabled={page >= totalPage && true}
        onClick={() => {
          router.push(
            pathname + '?' + createQueryString('page', `${Number(page) + 1}`),
          );
        }}
        className={`text-sm font-semibold text-text-secondary px-3 py-2 rounded-md border border-border-secondary ${
          page >= totalPage ? 'bg-border-secondary' : ''
        }`}
      >
        <span className="block md:hidden">
          <ArrowRightIcon />
        </span>
        <span className="hidden md:block">Next</span>
      </button>
    </div>
  );
};

export default GlobalPagination;

// function Todos() {
//   const [page, setPage] = React.useState(0);

//   const fetchProjects = (page = 0) =>
//     fetch('/api/projects?page=' + page).then((res) => res.json());

//   const { isLoading, isError, error, data, isFetching, isPreviousData } =
//     useQuery({
//       queryKey: ['projects', page],
//       queryFn: () => fetchProjects(page),
//       keepPreviousData: true,
//     });

//   return (
//     <div>
//       {isLoading ? (
//         <div>Loading...</div>
//       ) : isError ? (
//         <div>Error: {error.message}</div>
//       ) : (
//         <div>
//           {data.projects.map((project) => (
//             <p key={project.id}>{project.name}</p>
//           ))}
//         </div>
//       )}
//       <span>Current Page: {page + 1}</span>
//       <button
//         onClick={() => setPage((old) => Math.max(old - 1, 0))}
//         disabled={page === 0}
//       >
//         Previous Page
//       </button>{' '}
//       <button
//         onClick={() => {
//           if (!isPreviousData && data.hasMore) {
//             setPage((old) => old + 1);
//           }
//         }}
//         // Disable the Next Page button until we know a next page is available
//         disabled={isPreviousData || !data?.hasMore}
//       >
//         Next Page
//       </button>
//       {isFetching ? <span> Loading...</span> : null}{' '}
//     </div>
//   );
// }
