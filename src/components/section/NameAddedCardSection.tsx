import SuggestedNameCard from '../cards/SuggestedNameCard';
import PreLoader from '../loader/Loader';
import NotFound from '../loader/NotFound';
import GlobalPagination from '../pagination/GlobalPagination';

const NameAddedCardSection = ({
  isError,
  isLoading,
  suggestedName,
}: {
  isError: any;
  isLoading: any;
  suggestedName: any;
}) => {
  return (
    <>
      {isLoading && <PreLoader />}

      {isError ||
        (suggestedName?.data?.pagination?.totalItems <= 0 && <NotFound />)}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {suggestedName?.data?.data?.map((item: any) => (
          <SuggestedNameCard name={item} />
        ))}
      </div>

      {suggestedName?.data.pagination?.totalItems >
        suggestedName?.data?.pagination?.limit && (
        <GlobalPagination
          page={suggestedName?.data?.pagination?.page}
          totalPage={suggestedName?.data?.pagination?.totalPage}
        />
      )}
    </>
  );
};

export default NameAddedCardSection;
