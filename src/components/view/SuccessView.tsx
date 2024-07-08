'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const SuccessView = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className="my-40">
      <h1 className="text-center text-xl text-green-500">Payment Success</h1>
    </div>
  );
};

export default SuccessView;
