import ArrowLeftIcon from '@/assets/icons/ArrowLeftIcon';
import ArrowRightIcon from '@/assets/icons/ArrowRightIcon';

interface GlobalPaginationProps {
  totalPage: number;
  page: number;
}

const GlobalPagination = ({
  page = 0,
  totalPage = 0,
}: GlobalPaginationProps) => {
  return (
    <div className="flex justify-between items-center">
      <button
        type="button"
        disabled={page <= 1 && true}
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
