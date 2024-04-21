import { ReactNode } from 'react';

interface PropTypes {
  children: ReactNode;
  onClick?: () => void;
}

const PlanButton = ({ children }: PropTypes) => {
  return (
    <button className="text-primary font-semibold hover:text-green-hover">
      {children}
    </button>
  );
};

export default PlanButton;
