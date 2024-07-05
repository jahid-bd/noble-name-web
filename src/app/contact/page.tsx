import { Metadata } from 'next';
import dynamic from 'next/dynamic';
const ContactView = dynamic(() => import('@/components/view/ContactView'));

export const metadata: Metadata = {
  title: 'Contact',
  description: 'This is contact page.',
};

const ContactPage = () => {
  return <ContactView />;
};

export default ContactPage;
