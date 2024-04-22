import PlanCard from "@/components/cards/PlanCard";
import UserDashboardNav from "@/components/navs/UserDashboardNav";

const SubscriptionView = () => {
    return (
        <main className="bg-white pt-6 md:pt-[26px] pb-[60px] md:pb-[60px]">
            <div className="container mx-auto px-[6px]">
                <UserDashboardNav />

                <div className="w-full md:w-[700px] mx-auto">
                    <p className=" text-text-secondary mb-2 text-sm font-medium">
                        Current Plan
                    </p>

                    <PlanCard
                        price={1}
                        title="Couple Plan"
                        active_plan={true}
                        features={["active"]}
                        active_membership={true}
                        button_title="Cancel Subscription"
                        description="Our most popular plan for couples"
                    />
                </div>
            </div>
        </main>
    );
};

export default SubscriptionView;
