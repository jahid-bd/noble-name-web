import Image from 'next/image';
import Link from 'next/link';

const BlogCard = ({ blog }: { blog: any }) => {
  return (
    <Link href={`/blog/${blog?._id}`}>
      <div className="relative w-full h-56 rounded-2xl overflow-hidden">
        <Image fill src={blog?.thumbnail} alt="image" />
      </div>

      <div className="mt-3">
        <h3 className="mb-2 text-text-primary font-semibold">{blog?.title}</h3>
        <p className="text-text-tertiary text-base font-normal">
          {blog?.description}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
