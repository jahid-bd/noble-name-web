import BlogCard from "@/components/cards/BlogCard";
import GlobalPagination from "@/components/pagination/GlobalPagination";

const BlogView = () => {
    return (
        <main className="bg-white pt-6 md:pt-[26px] pb-[60px] md:pb-[60px]">
            <div className="container mx-auto px-[6px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                </div>

                <GlobalPagination />
            </div>
        </main>
    );
};

export default BlogView;
