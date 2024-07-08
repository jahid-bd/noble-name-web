import AboutUsView from '@/components/view/AboutUsView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Noble Names',
  description:
    'Learn more about Noble Names, your trusted source for finding beautiful and meaningful Muslim baby names.',
};

const AboutUsPage = () => {
  return <AboutUsView />;
};

export default AboutUsPage;
