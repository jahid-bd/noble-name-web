import ArrowLeftIcon from "@/assets/icons/ArrowLeftIcon";
import ArrowRightIcon from "@/assets/icons/ArrowRightIcon";

const GlobalPagination = () => {
    return (
        <div className="flex justify-between items-center">
            <button
                type="button"
                className="text-sm font-semibold text-text-secondary px-3 py-2 rounded-md border border-border-secondary"
            >
                <span className="block md:hidden">
                    <ArrowLeftIcon />
                </span>
                <span className="hidden md:block">Previous</span>
            </button>

            <p className="text-sm font-medium text-text-secondary">
                Page 1 of 10
            </p>

            <button
                type="button"
                className="text-sm font-semibold text-text-secondary px-3 py-2 rounded-md border border-border-secondary"
            >
                <span className="block md:hidden">
                    <ArrowRightIcon />
                </span>
                <span className="hidden md:block">Next</span>
            </button>
        </div>
    );
};

export default GlobalPagination;
