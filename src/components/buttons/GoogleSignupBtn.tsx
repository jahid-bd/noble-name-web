import GoogleIcon from '@/assets/icons/GoogleIcon';

interface PropTypes {
  text: string;
  onClick?: () => void;
}

const GoogleSignupBtn = ({ text, onClick }: PropTypes) => {
  return (
    <button
      className="w-full  rounded-md text-base font-semibold text-text-secondary border border-border-primary  p-[10px] flex items-center justify-center gap-3"
      onClick={onClick}
    >
      <span>
        <GoogleIcon />
      </span>
      <span>{text}</span>
    </button>
  );
};

export default GoogleSignupBtn;
