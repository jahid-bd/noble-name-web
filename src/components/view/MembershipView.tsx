import PlanCard from "@/components/cards/PlanCard";

const MembershipPlanView = () => {
    return (
        <main className="bg-white pt-6 md:pt-[26px] pb-[60px] md:pb-[60px]">
            <div className="container mx-auto px-[6px]">
                <h1 className="text-center text-2xl md:text-4xl font-semibold text-text-primary mb-[6px] md:mb-5">
                    Choose the plan you need
                </h1>
                <p className="text-center text-lg md:text-xl font-normal text-text-tertiary">
                    Simply choose your plan
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 md:mt-16">
                    <PlanCard
                        price={0}
                        title="Basic Plan"
                        default_plan={true}
                        features={["active"]}
                        button_title="Current Plan"
                        description="For basic users"
                    />

                    <PlanCard
                        price={1}
                        title="Couple Plan"
                        active_plan={true}
                        features={["active"]}
                        button_title="Upgrade"
                        description="Our most popular plan for couples"
                    />

                    <PlanCard
                        price={10}
                        title="Family Plan"
                        features={["active"]}
                        button_title="Upgrade"
                        description="Our most popular plan for family"
                    />
                </div>
            </div>
        </main>
    );
};

export default MembershipPlanView;
