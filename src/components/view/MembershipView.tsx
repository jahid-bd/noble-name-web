'use client';

import PlanCard from '@/components/cards/PlanCard';
import { getActivePlan, getAllPlans, subscribePlan } from '@/services/api';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';

const MembershipPlanView = () => {
  // api need
  // 1. get active plan
  // 2. get all plans
  // 3. get
  const router = useRouter();

  const { data: activePlan } = useQuery({
    queryKey: ['active-plan'],
    queryFn: getActivePlan,
  });

  const { data } = useQuery({ queryKey: ['plans'], queryFn: getAllPlans });
  console.log('Plans', data);
  console.log('active', activePlan);

  const { mutate: subscribeNow, isPending } = useMutation({
    mutationFn: (data: { planId: string; userId: string }) =>
      subscribePlan({
        plan_id: data.planId,
        user_id: data.userId,
      }),
    onError: (error: any) => {
      console.log('error', error);
    },
    onSuccess: (data: any) => {
      console.log(data);
      router.push(data.data.url);
    },
  });

  // checkout-session
  const handleSubscription = async () => {
    subscribeNow({
      planId: '662e66508f46ba0ab35c58c0',
      userId: activePlan.user,
    });
  };

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
            features={['active']}
            button_title="Current Plan"
            description="For basic users"
          />

          <PlanCard
            price={1}
            title="Couple Plan"
            active_plan={true}
            features={['active']}
            button_title="Upgrade"
            description="Our most popular plan for couples"
            onClick={handleSubscription}
          />

          <PlanCard
            price={10}
            title="Family Plan"
            features={['active']}
            button_title="Upgrade"
            description="Our most popular plan for family"
          />
        </div>
      </div>
    </main>
  );
};

export default MembershipPlanView;
