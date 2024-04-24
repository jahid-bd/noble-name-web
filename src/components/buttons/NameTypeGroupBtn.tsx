const NameTypeGroupBtn = () => {
    return (
        <div className="border rounded-md border-border-primary overflow-hidden w-fit">
            <button
                type="button"
                className="px-3 py-2 text-text-secondary font-semibold bg-gray-bg"
            >
                All
            </button>

            <button
                type="button"
                className="px-3 py-2 text-text-secondary font-semibold  border-x border-border-primary"
            >
                Boys
            </button>

            <button
                type="button"
                className="px-3 py-2 text-text-secondary font-semibold"
            >
                Girls
            </button>
        </div>
    );
};

export default NameTypeGroupBtn;
