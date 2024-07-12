'use client';

import PlanCard from '@/components/cards/PlanCard';
import { BASE_URL, STRIPE_PUBLIC_KEY } from '@/constants';
import {
  freeSubscription,
  getActivePlan,
  getAllPlans,
  getUserProfile,
} from '@/services/api';
import { loadStripe } from '@stripe/stripe-js';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useState } from 'react';
import { toast } from 'react-toastify';
import PreLoader from '../loader/Loader';

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY as string);

const MembershipPlanView = () => {
  const queryClient = useQueryClient();

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
  const [isPending, setIsPending] = useState(false);

  const { mutate: subscribeFree } = useMutation({
    mutationFn: (id: string) => freeSubscription(''),
    onError: (error: any) => {
      console.log('error', error);
    },
    onSuccess: (data: any) => {
      console.log(data);
      queryClient.invalidateQueries({ queryKey: ['active-plan'] });

      toast.success('Free plan subscribe successfully');
      setIsPending(true);
    },
  });

  const handleSubscription = async (id: string) => {
    setIsPending(true);
    setLoadingId(id);
    if (!user) return toast.error('Please login before');

    const response = await axios.post(`${BASE_URL}/create-checkout-session`, {
      plan_id: id,
      user_id: user?._id,
    });
    const session = await response.data;
    console.log(session);

    const stripe = await stripePromise;

    if (stripe) {
      await stripe.redirectToCheckout({ sessionId: session.id });
      setIsPending(false);
    }
  };

  const handleFreeSubscription = async (id: string) => {
    setIsPending(true);
    setLoadingId(id);

    subscribeFree(id);
    // try {
    //   if (!user) return toast.error('Please login before');

    //   const response = await axios.post(
    //     `${BASE_URL}/subscribe-free-plan`,
    //     {},
    //     { withCredentials: true },
    //   );

    //   setIsPending(false);
    //   console.log(response);
    // } catch (error) {
    //   console.log(error);

    //   setIsPending(false);
    // }
  };

  return (
    <main className="bg-white pt-6 md:pt-[26px] pb-[60px] md:pb-[60px]">
      <div className="container mx-auto px-[6px]">
        <h1 className="text-center text-2xl md:text-4xl font-semibold text-text-primary mb-[6px] md:mb-5">
          Select your Plan
        </h1>

        {isLoading && !isError ? (
          <div className="h-72">
            <PreLoader />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 md:mt-16">
            {allPlans?.map((plan: any) => (
              <PlanCard
                key={plan?._id}
                price={plan?.price}
                title={plan?.title}
                features={plan?.features}
                description={plan?.description}
                disabled={plan?._id === activePlan?._id ? true : false}
                // button_title={
                //   plan?._id === activePlan?._id ? 'Current Plan' : 'Upgrade'
                // }
                button_title={
                  plan?._id === activePlan?._id
                    ? 'Current Plan'
                    : plan?.price > activePlan?.price
                    ? 'Upgrade'
                    : 'Downgrade'
                }
                active_plan={plan?._id === activePlan?._id}
                default_plan={plan?._id === activePlan?._id}
                onClick={() =>
                  plan?.price === 0
                    ? handleFreeSubscription(plan?._id)
                    : handleSubscription(plan?._id)
                }
                is_loading={plan?._id === loadingId && isPending}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MembershipPlanView;
