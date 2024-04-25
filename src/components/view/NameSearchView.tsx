import NameCard from "@/components/cards/NameCard";
import GlobalPagination from "@/components/pagination/GlobalPagination";

const NameSearchView = () => {
    return (
        <main className="bg-white pb-[60px] md:pb-[60px]">
            <div className="container mx-auto px-[6px]">
                <section className="bg-black py-16">
                    <div className="container mx-auto px-[6px]">
                        <div>
                            <h3>Search Section</h3>
                        </div>
                    </div>
                </section>

                <div>
                    <p>153 results</p>
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
