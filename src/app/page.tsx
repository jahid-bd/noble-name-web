'use client';

import BlogSection from '@/components/ui/home/BlogSection';
import FeaturesSection from '@/components/ui/home/FeaturesSectin';
import Footer from '@/components/ui/home/Footer';
import FrameComponent from '@/components/ui/home/FrameComponent';
import FrameComponent1 from '@/components/ui/home/FrameComponent1';
import FullWidthHeaderNavigation from '@/components/ui/home/FullWidthHeaderNavigation';
import NewsletterCTASection from '@/components/ui/home/NewsletterCTASection';
import type { NextPage } from 'next';

const Homepage: NextPage = () => {
  return (
    <div className="w-full relative bg-component-colors-components-buttons-primary-button-primary-fg overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <FullWidthHeaderNavigation />
      <FrameComponent1 />
      <FeaturesSection />
      <NewsletterCTASection />
      <BlogSection />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default Homepage;
