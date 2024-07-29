import GoogleIcon from '@/assets/icons/GoogleIcon';
import { BASE_URL } from '@/constants';

interface PropTypes {
  text: string;
  // onClick?: () => void;
}

const GoogleSignupBtn = ({ text }: PropTypes) => {
  return (
    <a
      href={`${BASE_URL}/auth/social`}
      className="w-full  rounded-md text-base font-semibold text-text-secondary border border-border-primary  p-[10px] flex items-center justify-center gap-3"
    >
      <span>
        <GoogleIcon />
      </span>
      <span>{text}</span>
    </a>
  );
};

export default GoogleSignupBtn;
