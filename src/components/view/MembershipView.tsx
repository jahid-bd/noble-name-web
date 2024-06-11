'use client';

import PlanCard from '@/components/cards/PlanCard';
import { BASE_URL, STRIPE_PUBLIC_KEY } from '@/constants';
import {
  getActivePlan,
  getAllPlans,
  getUserProfile,
  subscribePlan,
} from '@/services/api';
import { loadStripe } from '@stripe/stripe-js';
import { useMutation, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import PreLoader from '../loader/Loader';

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY as string);

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

  const handleSubscription = async (id: string) => {
    setLoadingId(id);
    if (!user) return toast.error('Please login before');

    // const response = await fetch(`${BASE_URL}/create-checkout-session`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     plan_id: id,
    //     user_id: user?._id,
    //   }),
    // });

    const response = await axios.post(`${BASE_URL}/create-checkout-session`, {
      plan_id: id,
      user_id: user?._id,
    });
    const session = await response.data;
    console.log(session);
    const stripe = await stripePromise;
    if (stripe) {
      await stripe.redirectToCheckout({ sessionId: session.id });
    }

    // const response = await axios.post(`${BASE_URL}/create-checkout-session`, {
    //   plan_id: id,
    //   user_id: user?._id,
    // });

    // const session = await response.data;

    // console.log({ session });
    // const stripe = await stripePromise;
    // if (stripe) {
    //   await stripe.redirectToCheckout({ sessionId: session.id });
    // }
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
