import Image from 'next/image';
import Link from 'next/link';

const EditableBlogCard = ({
  blog,
  handleDelete,
}: {
  blog: any;
  handleDelete: any;
}) => {
  return (
    <div className="relative group">
      <Link href={`/blog/${blog?._id}`}>
        <div className="relative w-full h-56 rounded-2xl overflow-hidden">
          <Image fill src={blog?.thumbnail} alt="image" />
        </div>

        <div className="mt-3">
          <h3 className="mb-2 text-text-primary font-semibold">
            {blog?.title}
          </h3>
          <p className="text-text-tertiary text-base font-normal">
            {blog?.description}
          </p>
        </div>
      </Link>

      <div
        className={`absolute h-[70px] left-0 right-0 bottom-0 bg-border-primary bg-opacity-30 cursor-pointer hidden group-hover:block`}
      >
        <div className="flex items-center gap-3 w-full h-full justify-center px-3">
          <button
            type="button"
            onClick={() => handleDelete(blog?._id)}
            className="w-full bg-slate-400 rounded-md text-base font-semibold text-white px-2.5 py-2 flex items-center justify-center hover:bg-dark-pink"
          >
            Delete
          </button>
          <button
            type="button"
            // onClick={handleEdit}
            className="w-full bg-primary rounded-md text-base font-semibold text-white px-2.5 py-2 flex items-center justify-center button-hover"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditableBlogCard;
