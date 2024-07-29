import RequestedNameCard from '../cards/RequsetedName';
import PreLoader from '../loader/Loader';
import NotFound from '../loader/NotFound';
import GlobalPagination from '../pagination/GlobalPagination';

const RequestedNameCardSection = ({
  names,
  isError,
  isLoading,
  handleReject,
  handleApprove,
}: {
  names: any;
  isError: any;
  isLoading: any;
  handleReject: (id: string) => void;
  handleApprove: (id: string) => void;
}) => {
  return (
    <>
      {isLoading && !isError && (
        <div className="h-72">
          <PreLoader />
        </div>
      )}

      {(isError && !isLoading) ||
        (names?.data?.pagination?.totalItems <= 0 && <NotFound />)}

      {!isError && !isLoading && names && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {names?.data?.data?.map((item: any) => (
            <RequestedNameCard
              name={item}
              key={item._id}
              handleReject={() => handleReject(item?._id)}
              handleApprove={() => handleApprove(item?._id)}
            />
          ))}
        </div>
      )}

      {Number(names?.data?.pagination?.totalItems) >
        Number(names?.data?.pagination?.limit) && (
        <GlobalPagination
          page={Number(names?.data?.pagination?.page)}
          totalPage={Number(names?.data?.pagination?.totalPage)}
        />
      )}
    </>
  );
};

export default RequestedNameCardSection;
