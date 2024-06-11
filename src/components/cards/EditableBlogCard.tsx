import Image from 'next/image';
import Link from 'next/link';

const EditableBlogCard = ({
  blog,
  handleEdit,
  handleDelete,
}: {
  blog: any;
  handleEdit: (data: object) => void;
  handleDelete: (id: string) => void;
}) => {
  return (
    <div className="relative flex flex-col justify-between h-full">
      <Link href={`/blog/${blog?._id}`}>
        <div className="relative w-full h-56 rounded-2xl overflow-hidden">
          <Image fill src={blog?.thumbnail} alt="image" />
        </div>

        <div className="mt-3">
          <h3 className="mb-2 text-text-primary font-semibold">
            {blog?.title}
          </h3>
          {/* <p className="text-text-tertiary text-base font-normal">
            {blog?.description}
          </p> */}
        </div>
      </Link>

      <div className={`cursor-pointer`}>
        <div className="flex items-center gap-3 w-full h-full justify-center">
          <button
            type="button"
            onClick={() => handleDelete(blog?._id)}
            className="w-full bg-slate-400 rounded-md text-base font-semibold text-white px-2.5 py-2 flex items-center justify-center hover:bg-red-700"
          >
            Delete
          </button>
          <button
            type="button"
            onClick={() => handleEdit(blog)}
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
