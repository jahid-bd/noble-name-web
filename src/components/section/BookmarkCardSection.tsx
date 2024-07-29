import NameCard from '../cards/NameCard';
import PreLoader from '../loader/Loader';
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
      {isLoading && !isError && (
        <div className="h-72">
          <PreLoader />
        </div>
      )}

      {(isError && !isLoading) ||
        (bookmarks?.data?.pagination?.totalItems <= 0 && (
          <div className="h-20"></div>
        ))}

      {!isError && !isLoading && bookmarks && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {bookmarks?.data?.data?.map((item: any) => (
            <NameCard name={item} key={item._id} />
          ))}
        </div>
      )}

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
