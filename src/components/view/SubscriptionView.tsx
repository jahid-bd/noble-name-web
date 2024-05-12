'use client';

import PlanCard from '@/components/cards/PlanCard';
import UserDashboardNav from '@/components/navs/UserDashboardNav';
import { cancelSubscription, getActivePlan } from '@/services/api';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import PreLoader from '../loader/Loader';

const SubscriptionView = () => {
  const {
    data: activePlan,
    isLoading,
    error: isError,
  } = useQuery({
    queryKey: ['active-plan'],
    queryFn: getActivePlan,
  });

  // cancel subscription
  const router = useRouter();

  const { mutate: cancel, isPending: isCancelling } = useMutation({
    mutationFn: (id: string) => cancelSubscription(id),
    onError: (error: any) => {
      console.log('error', error);
    },
    onSuccess: (data: any) => {
      console.log(data);
      router.push('/subscription/success');
    },
  });

  const handleCanncel = () => {
    cancel(activePlan?._id);
  };

  console.log('activePlan', activePlan);

  return (
    <main className="bg-white pt-6 md:pt-[26px] pb-[60px] md:pb-[60px]">
      <div className="container mx-auto px-[6px]">
        <UserDashboardNav />

        {isLoading && !isError && (
          <div className="h-72">
            <PreLoader />
          </div>
        )}

        {!isLoading && !isError && activePlan && (
          <div className="w-full md:w-[700px] mx-auto">
            <p className=" text-text-secondary mb-2 text-sm font-medium">
              Current Plan
            </p>

            <PlanCard
              price={activePlan?.price}
              title={activePlan?.title}
              active_plan={true}
              features={activePlan?.features}
              active_membership={true}
              button_title="Cancel Subscription"
              free_plan={activePlan?.price === 0}
              description={activePlan?.description}
              is_loading={isCancelling}
              handleCancel={handleCanncel}
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default SubscriptionView;
