'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

// export const metadata: Metadata = {
//   title: 'Success',
//   description: 'This is success page.',
// };

const Seccess = () => {
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

export default Seccess;
