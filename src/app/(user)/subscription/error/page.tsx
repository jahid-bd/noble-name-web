'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Error = () => {

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
   <div className="my-40">
            <h1 className="text-center text-xl text-red-500">Payment Error</h1>
        </div>
  );
};

export default Error;
