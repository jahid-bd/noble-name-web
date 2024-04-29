import NameCard from "@/components/cards/NameCard";
import GlobalPagination from "@/components/pagination/GlobalPagination";

const AdminNameRequestView = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <p className="text-2xl font-semibold text-text-primary">
                    Name Request List
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                <NameCard />
                <NameCard />
                <NameCard />
                <NameCard />
            </div>

            <GlobalPagination />
        </div>
    );
};

export default AdminNameRequestView;
