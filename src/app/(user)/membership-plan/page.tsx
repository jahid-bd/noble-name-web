import type { NextPage } from 'next';

import PreLoader from '@/components/loader/Loader';
import dynamic from 'next/dynamic';

const MembershipPlanView = dynamic(
  () => import('@/components/view/MembershipView'),
  {
    loading: () => <PreLoader />,
  }
);

const MembershipPlan: NextPage = () => {
  return <MembershipPlanView />;
};

export default MembershipPlan;
