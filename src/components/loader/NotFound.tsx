import not_found from '@/assets/images/not_found.jpg';
import Image from 'next/image';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full md:w-1/2">
        <Image src={not_found} alt="Data not found" />
      </div>
    </div>
  );
};

export default NotFound;
