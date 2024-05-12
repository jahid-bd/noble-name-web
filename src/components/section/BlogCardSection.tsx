import BlogCard from '../cards/BlogCard';
import PreLoader from '../loader/Loader';
import NotFound from '../loader/NotFound';
import GlobalPagination from '../pagination/GlobalPagination';

const BlogCardSection = ({
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
      {isLoading && !isError && (
        <div className="h-72">
          <PreLoader />
        </div>
      )}

      {(isError && !isLoading) ||
        (blogs?.data?.pagination?.totalItems <= 0 && <NotFound />)}

      {!isError && !isLoading && blogs && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {blogs?.data?.data?.map((item: any) => (
            <BlogCard blog={item} key={item._id} />
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

export default BlogCardSection;
