import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
const MembershipPlanView = dynamic(
  () => import('@/components/view/MembershipView'),
);

const MembershipPlan: NextPage = () => {
  return <MembershipPlanView />;
};

export default MembershipPlan;
