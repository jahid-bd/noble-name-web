'use client';
import LoginView from '@/components/view/LoginView';
import type { NextPage } from 'next';

const LogIn: NextPage = () => {
  return (
    <div className="w-full relative bg-colors-background-bg-primary overflow-hidden flex flex-row items-start justify-center pt-[212.5px] px-5 pb-[191.5px] box-border leading-[normal] tracking-[normal]">
      <LoginView />
    </div>
  );
};

export default LogIn;
