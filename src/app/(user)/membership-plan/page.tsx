import type { Metadata, NextPage } from 'next';
import dynamic from 'next/dynamic';
const MembershipPlanView = dynamic(
  () => import('@/components/view/MembershipView'),
);

export const metadata: Metadata = {
  title: 'Membership Plan',
  description: 'This is membership plan page.',
};

const MembershipPlan: NextPage = () => {
  return <MembershipPlanView />;
};

export default MembershipPlan;
