import GoogleIcon from '@/assets/icons/GoogleIcon';

const GoogleSignupBtn = () => {
  return (
    <button className="w-full  rounded-md text-base font-semibold text-text-secondary border border-border-primary  p-[10px] flex items-center justify-center gap-3">
      <span>
        <GoogleIcon />
      </span>
      <span>Sign up with Google</span>
    </button>
  );
};

export default GoogleSignupBtn;
