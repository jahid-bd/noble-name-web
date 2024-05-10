import PreLoader from '@/components/loader/Loader';
import dynamic from 'next/dynamic';

const ContactView = dynamic(() => import('@/components/view/ContactView'), {
  loading: () => <PreLoader />,
});

const ContactPage = () => {
  return <ContactView />;
};

export default ContactPage;
