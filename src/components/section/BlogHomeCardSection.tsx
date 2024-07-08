import Link from 'next/link';
import BlogCard from '../cards/BlogCard';

const BlogHomeCardSection = ({ blogs }: { blogs: any }) => {
  return (
    <>
      {blogs?.data?.pagination?.totalItems > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {blogs?.data?.data?.map((item: any) => (
            <BlogCard blog={item} key={item._id} />
          ))}
        </div>
      )}

      <div className="flex justify-center">
        <Link
          href="/articles"
          className="py-2.5 px-4 bg-primary rounded-md text-base font-semibold text-white flex items-center justify-center button-hover"
        >
          More Articles
        </Link>
      </div>
    </>
  );
};

export default BlogHomeCardSection;
