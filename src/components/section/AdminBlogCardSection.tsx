import EditableBlogCard from '../cards/EditableBlogCard';
import PreLoader from '../loader/Loader';
import NotFound from '../loader/NotFound';
import GlobalPagination from '../pagination/GlobalPagination';

const AdminBlogCardSection = ({
  blogs,
  isError,
  isLoading,
  handleEdit,
  handleDelete,
}: {
  blogs: any;
  isError: any;
  isLoading: any;
  handleEdit: (data: object) => void;
  handleDelete: (id: string) => void;
}) => {
  return (
    <>
      {isLoading && !isError && (
        <div className="h-72">
          <PreLoader />
        </div>
      )}

      {isError || (blogs?.data?.pagination?.totalItems <= 0 && <NotFound />)}

      {!isLoading && !isError && blogs && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {blogs?.data?.data?.map((item: any) => (
            <EditableBlogCard
              blog={item}
              key={item?._id}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {blogs?.data?.pagination?.totalItems > blogs?.data?.pagination?.limit && (
        <GlobalPagination
          page={blogs?.data?.pagination?.page}
          totalPage={blogs?.data?.pagination?.totalPage}
        />
      )}
    </>
  );
};

export default AdminBlogCardSection;
