import NameCard from "@/components/cards/NameCard";
import UserDashboardNav from "@/components/navs/UserDashboardNav";
import NameTypeGroupBtn from "@/components/buttons/NameTypeGroupBtn";
import GlobalPagination from "@/components/pagination/GlobalPagination";

const DashboardView = () => {
    return (
        <main className="bg-white pt-6 md:pt-[26px] pb-[60px] md:pb-[60px]">
            <div className="container mx-auto px-[6px]">
                <UserDashboardNav />

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 mb-10">
                    <div className="flex items-center gap-1">
                        <button
                            type="button"
                            className="px-2 md:px-3 py-2 flex items-center gap-2 text-xs md:text-base font-semibold text-text-secondary border-[2px] border-border-success rounded-md bg-green-light-50"
                        >
                            Loved
                            <span className="border-border-secondary border bg-gray-bg rounded-full py-0.5 px-2.5 text-xs md:text-sm font-medium">
                                223
                            </span>
                        </button>

                        <button
                            type="button"
                            className="px-2 md:px-3 py-2 flex items-center gap-2 text-xs md:text-base font-semibold text-text-secondary"
                        >
                            Favorites
                            <span className="border-border-secondary border bg-gray-bg rounded-full py-0.5 px-2.5 text-xs md:text-sm font-medium">
                                159
                            </span>
                        </button>

                        <button
                            type="button"
                            className="px-2 md:px-3 py-2 flex items-center gap-2 text-xs md:text-base font-semibold text-text-secondary"
                        >
                            Names Added
                            <span className="border-border-secondary border bg-gray-bg rounded-full py-0.5 px-2.5 text-xs md:text-sm font-medium">
                                89
                            </span>
                        </button>
                    </div>

                    <NameTypeGroupBtn />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
                    <NameCard />
                    <NameCard />
                    <NameCard />
                    <NameCard />
                    <NameCard />
                </div>

                <GlobalPagination />
            </div>
        </main>
    );
};

export default DashboardView;
