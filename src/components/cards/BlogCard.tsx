import Link from "next/link";
import Image from "next/image";

const BlogCard = () => {
    return (
        <Link href="/">
            <div className="relative w-full h-56 rounded-2xl overflow-hidden">
                <Image fill src="/images/Image.jpg" alt="image" />
            </div>

            <div className="mt-3">
                <h3 className="mb-2 text-text-primary font-semibold">
                    At consectetur enim semper
                </h3>
                <p className="text-text-tertiary text-base font-normal">
                    Laoreet sed pellentesque morbi eget mauris lectus risus
                    cursus. Amet quam est nisl risus eu dolor.
                </p>
            </div>
        </Link>
    );
};

export default BlogCard;
