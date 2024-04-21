import clsx from 'clsx';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  prefixIcon?: JSX.Element;
  suffixIcon?: JSX.Element;
  variant?: string;
  onClick?: () => void;
}

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(
        'w-full bg-primary rounded-md text-base font-semibold text-white p-[10px] flex items-center justify-center',
        className
      )}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};

export default Button;
