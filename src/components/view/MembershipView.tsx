'use client';

import PlanCard from '@/components/cards/PlanCard';
import {
  getActivePlan,
  getAllPlans,
  getUserProfile,
  subscribePlan,
} from '@/services/api';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import PreLoader from '../loader/Loader';

const MembershipPlanView = () => {
  const router = useRouter();

  const {
    data: activePlan,
    isLoading,
    error: isError,
  } = useQuery({
    queryKey: ['active-plan'],
    queryFn: getActivePlan,
  });

  const { data: user } = useQuery({
    queryKey: ['profile'],
    queryFn: getUserProfile,
  });

  const { data: allPlans } = useQuery({
    queryKey: ['plans'],
    queryFn: getAllPlans,
  });

  const [loadingId, setLoadingId] = useState('');

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

  const handleSubscription = (id: string) => {
    setLoadingId(id);
    if (!user) return toast.error('Please login before');

    subscribeNow({
      planId: id,
      userId: user?._id,
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

        {isLoading && !isError && (
          <div className="h-72">
            <PreLoader />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 md:mt-16">
          {allPlans?.map((plan: any) => (
            <PlanCard
              key={plan?._id}
              price={plan?.price}
              title={plan?.title}
              features={plan?.features}
              description={plan?.description}
              button_title={
                plan?._id === activePlan?._id ? 'Current Plan' : 'Upgrade'
              }
              active_plan={plan?._id === activePlan?._id}
              default_plan={plan?._id === activePlan?._id}
              onClick={() => handleSubscription(plan?._id)}
              is_loading={plan?._id === loadingId && isPending}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default MembershipPlanView;
