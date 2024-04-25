import FilterIcon from "@/assets/icons/FilterIcon";
import NameCard from "@/components/cards/NameCard";
import GlobalPagination from "@/components/pagination/GlobalPagination";

const NameSearchView = () => {
    return (
        <main className="bg-white pb-[60px] md:pb-[60px]">
            <div className="container mx-auto px-[6px]">
                <section className="bg-black py-16 mb-11">
                    <div className="container mx-auto px-[6px]">
                        <div>
                            <h3>Search Section</h3>
                        </div>
                    </div>
                </section>

                <div className="flex justify-between items-center mb-4 md:mb-6">
                    <p className="text-base font-semibold text-text-tertiary">
                        153 results
                    </p>

                    <button
                        type="button"
                        className="flex items-center gap-1.5 text-text-secondary border border-border-primary rounded-lg drop-shadow-btn-shadow-xs px-3.5 py-2.5"
                    >
                        <FilterIcon />

                        <span>Filter Results</span>
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 mb-8">
                    <NameCard />
                    <NameCard />
                    <NameCard />
                    <NameCard />
                    <NameCard />
                    <NameCard />
                    <NameCard />
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

export default NameSearchView;
