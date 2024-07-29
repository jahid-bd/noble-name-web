import PaymentCancelView from '@/components/view/PaymentCancelView';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Payment Cancel - Noble Names',
  description: 'This is error page.',
};

const PaymentCancel = () => {
  return <PaymentCancelView />;
};

export default PaymentCancel;
