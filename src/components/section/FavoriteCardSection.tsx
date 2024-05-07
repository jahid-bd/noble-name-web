import NameCard from '../cards/NameCard';
import PreLoader from '../loader/Loader';
import NotFound from '../loader/NotFound';
import GlobalPagination from '../pagination/GlobalPagination';

const FavoriteCardSection = ({
  isError,
  isLoading,
  favorites,
}: {
  isError: any;
  favorites: any;
  isLoading: any;
}) => {
  return (
    <>
      {isLoading && <PreLoader />}

      {isError ||
        (favorites?.data?.pagination?.totalItems <= 0 && <NotFound />)}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {favorites?.data?.data?.map((item: any) => (
          <NameCard name={item} key={item._id} />
        ))}
      </div>

      {favorites?.data?.pagination?.totalItems >
        favorites?.data?.pagination?.limit && (
        <GlobalPagination
          page={favorites?.data?.pagination?.page}
          totalPage={favorites?.data?.pagination?.totalPage}
        />
      )}
    </>
  );
};

export default FavoriteCardSection;
