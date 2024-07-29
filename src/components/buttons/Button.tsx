import LoadingIcon from '@/assets/icons/LoadingIcon';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  prefixIcon?: JSX.Element;
  suffixIcon?: JSX.Element;
  variant?: string;
  onClick?: () => void;
  isLoading?: boolean;
  type?: any;
}

const Button = ({ children, className, onClick, isLoading }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'w-full bg-primary rounded-md text-base font-semibold text-white p-[10px] flex items-center justify-center button-hover',
        className
      )}
      onClick={onClick}
    >
      <>
        <span className="mr-2">{isLoading ? <LoadingIcon /> : null}</span>
        <span>{children}</span>
      </>
    </button>
  );
};

export default Button;
