'use client';

import SignupView from '@/components/view/SignupView';
import type { NextPage } from 'next';

const SignUp: NextPage = () => {
  return (
    <div className="w-full relative bg-colors-background-bg-primary overflow-hidden flex flex-row items-start justify-center py-[5rem] px-5 box-border leading-[normal] tracking-[normal]">
      <SignupView />
    </div>
  );
};

export default SignUp;
