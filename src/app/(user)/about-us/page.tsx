import AboutUsView from '@/components/view/AboutUsView';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'This is about page.',
};

const AboutUsPage = () => {
  return <AboutUsView />;
};

export default AboutUsPage;
