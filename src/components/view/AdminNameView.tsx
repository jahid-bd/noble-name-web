import NameCard from "@/components/cards/NameCard";
import EditableNameCard from "@/components/cards/EditableNameCard";
import GlobalPagination from "@/components/pagination/GlobalPagination";

const AdminNameView = () => {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <p className="text-2xl font-semibold text-text-primary">
                    Name List
                </p>

                <button
                    type="button"
                    className="bg-primary text-white text-sm px-5 py-1.5 rounded-md"
                >
                    Create Name
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
                <EditableNameCard />
                <EditableNameCard />
                <EditableNameCard />
                <EditableNameCard />
            </div>

            <GlobalPagination />
        </div>
    );
};

export default AdminNameView;
