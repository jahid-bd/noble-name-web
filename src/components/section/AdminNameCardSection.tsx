import EditableNameCard from '../cards/EditableNameCard';
import PreLoader from '../loader/Loader';
import NotFound from '../loader/NotFound';
import GlobalPagination from '../pagination/GlobalPagination';

const AdminNameCardSection = ({
  names,
  isError,
  isLoading,
  handleEdit,
}: {
  names: any;
  isError: any;
  isLoading: any;
  handleEdit: () => void;
}) => {
  return (
    <>
      {isLoading && <PreLoader />}

      {isError || (names?.data?.pagination?.totalItems <= 0 && <NotFound />)}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {names?.data?.data?.map((item: any) => (
          <EditableNameCard key={item} name={item} handleEdit={handleEdit} />
        ))}
      </div>

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

export default AdminNameCardSection;
