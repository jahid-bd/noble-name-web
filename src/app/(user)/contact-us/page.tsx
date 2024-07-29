import { Metadata } from 'next';
import dynamic from 'next/dynamic';
const ContactView = dynamic(() => import('@/components/view/ContactView'));

export const metadata: Metadata = {
  title: 'Contact Us - Noble Names',
  description:
    'Get in touch with Noble Names. We are here to help you find the perfect Muslim baby name.',
};

const ContactPage = () => {
  return <ContactView />;
};

export default ContactPage;
