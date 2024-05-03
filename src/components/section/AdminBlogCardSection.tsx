import EditableBlogCard from '../cards/EditableBlogCard';
import PreLoader from '../loader/Loader';
import NotFound from '../loader/NotFound';
import GlobalPagination from '../pagination/GlobalPagination';

const AdminBlogCardSection = ({
  isError,
  isLoading,
  blogs,
}: {
  isError: any;
  blogs: any;
  isLoading: any;
}) => {
  return (
    <>
      {isLoading && <PreLoader />}

      {isError || (blogs?.data?.pagination?.totalItems <= 0 && <NotFound />)}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
        {blogs?.data?.data?.map((item: any) => (
          <EditableBlogCard blog={item} />
        ))}
      </div>

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
