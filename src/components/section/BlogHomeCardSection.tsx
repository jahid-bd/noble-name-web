import BlogCard from '../cards/BlogCard';

const BlogHomeCardSection = ({ blogs }: { blogs: any }) => {
  return (
    <>
      {blogs?.data?.pagination?.totalItems > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
          {blogs?.data?.data?.map((item: any) => (
            <BlogCard blog={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default BlogHomeCardSection;
