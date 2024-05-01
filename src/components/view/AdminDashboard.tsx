import BlogCard from "@/components/cards/BlogCard";
import GlobalPagination from "@/components/pagination/GlobalPagination";

const AdminDashboardView = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <p className="text-2xl font-semibold text-text-primary">
                    Blog List
                </p>

                <button
                    type="button"
                    className="bg-primary text-white text-sm px-5 py-1.5 rounded-md"
                >
                    Create Blog
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>

            <GlobalPagination />
        </div>
    );
};

export default AdminDashboardView;
