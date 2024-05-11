import dynamic from 'next/dynamic';

const ContactView = dynamic(() => import('@/components/view/ContactView'));

const ContactPage = () => {
  return <ContactView />;
};

export default ContactPage;
