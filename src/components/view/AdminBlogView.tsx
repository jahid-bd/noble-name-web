"use client";

import { useState } from "react";
import BlogCard from "@/components/cards/BlogCard";
import GlobalPagination from "@/components/pagination/GlobalPagination";

const AdminBlogView = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        const body = document.getElementsByTagName("body")[0];

        body.style.overflow = "hidden";

        setOpenModal(true);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <p className="text-2xl font-semibold text-text-primary">
                    Blog List
                </p>

                <button
                    type="button"
                    onClick={handleOpenModal}
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

            {openModal && (
                <div>
                    <h1>Data open on modal</h1>
                </div>
            )}
        </div>
    );
};

export default AdminBlogView;
