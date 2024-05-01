'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Seccess = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className="my-40">
      <h1 className="text-center text-5xl text-green-500">Success</h1>
    </div>
  );
};

export default Seccess;
