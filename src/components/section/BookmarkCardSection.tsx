import NameCard from '../cards/NameCard';
import PreLoader from '../loader/Loader';
import NotFound from '../loader/NotFound';
import GlobalPagination from '../pagination/GlobalPagination';

const BookmarkCardSection = ({
  isError,
  bookmarks,
  isLoading,
}: {
  isError: any;
  bookmarks: any;
  isLoading: any;
}) => {
  return (
    <>
      {isLoading && <PreLoader />}

      {isError ||
        (bookmarks?.data?.pagination?.totalItems <= 0 && <NotFound />)}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {bookmarks?.data?.data?.map((item: any) => (
          <NameCard name={item} />
        ))}
      </div>

      {bookmarks?.data?.pagination?.totalItems >
        bookmarks?.data?.pagination?.limit && (
        <GlobalPagination
          page={bookmarks?.data?.pagination?.page}
          totalPage={bookmarks?.data?.pagination?.totalPage}
        />
      )}
    </>
  );
};

export default BookmarkCardSection;
