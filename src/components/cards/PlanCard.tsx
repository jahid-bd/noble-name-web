import CheckIcon from '@/assets/icons/CheckIcon';
import LoadingIcon from '@/assets/icons/LoadingIcon';
import XIcon from '@/assets/icons/XIcon';
import { STRIPE_PUBLIC_KEY } from '@/constants';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Link from 'next/link';
const stripePromise = loadStripe(STRIPE_PUBLIC_KEY as string);
interface PlanProps {
  title: string;
  price: number;
  features: {
    _id: string;
    title: string;
    value: boolean | number;
  }[];
  description: string;
  button_title: string;
  active_plan?: boolean;
  default_plan?: boolean;
  free_plan?: boolean;
  is_loading?: boolean;
  disabled?: boolean;
  active_membership?: boolean;
  onClick?: () => void;
  handleCancel?: () => void;
}

const PlanCard = ({
  title,
  price,
  onClick,
  features,
  disabled = false,
  description,
  active_plan,
  default_plan,
  button_title,
  active_membership,
  free_plan,
  is_loading,
  handleCancel,
}: PlanProps) => {
  return (
    <div
      className={`bg-white rounded-xl shadow-plan ${
        active_plan
          ? 'border-[6px] border-border-success'
          : 'border border-border-secondary'
      }`}
    >
      <div className="p-8">
        <h3 className="text-2xl font-semibold text-text-primary mb-1">
          {title}
        </h3>
        <p className="text-base font-normal text-text-tertiary mb-6 md:mb-8">
          {description}
        </p>

        <p className="text-6xl font-semibold text-text-primary">
          {price > 0 && <sup className="text-4xl">£</sup>}

          {price ? price : 'Free'}

          {price > 0 && (
            <sub className="text-base font-medium text-text-tertiary">
              per month
            </sub>
          )}
        </p>
      </div>

      <div className="border-y border-border-secondary p-8">
        <h4 className="text-base font-semibold text-text-primary mb-6">
          FEATURES
        </h4>

        <ul className="flex flex-col gap-5">
          {features?.map((item) => (
            <li key={item._id} className="flex gap-3 items-center">
              {item.value ? <CheckIcon /> : <XIcon />} <span>{item.title}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-8">
        {active_membership ? (
          <div className="grid grid-flow-row gap-[14px]">
            <Link
              href="/membership-plan"
              className="w-full rounded-lg text-white py-4 bg-primary text-center"
            >
              Change Plan
            </Link>

            {!free_plan ? (
              <button
                type="button"
                className="w-full rounded-lg  text-white py-4 bg-error-secondary"
                onClick={handleCancel}
              >
                <div className="flex items-center justify-center gap-2">
                  <span className="mr-2">
                    {is_loading ? <LoadingIcon /> : null}
                  </span>

                  <span>{button_title}</span>
                </div>
              </button>
            ) : null}
          </div>
        ) : (
          <Elements stripe={stripePromise}>
            <button
              type="button"
              onClick={onClick}
              disabled={disabled}
              className={`w-full rounded-lg  text-white py-4 ${
                default_plan ? 'bg-green-light' : 'bg-primary'
              }`}
            >
              <div className="flex items-center justify-center">
                <span className="mr-2">
                  {is_loading ? <LoadingIcon /> : null}
                </span>
                <span>{button_title}</span>
              </div>
            </button>
          </Elements>
        )}
      </div>

      {/* <div className="p-8">
        {active_membership ? (
          <div className="grid grid-flow-row gap-[14px]">
            <Link
              href="/membership-plan"
              className="w-full rounded-lg text-white py-4 bg-primary text-center"
            >
              Change Plan
            </Link>

            <button
              type="button"
              className="w-full rounded-lg  text-white py-4 bg-error-secondary"
            >
              {button_title}
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={onClick}
            className={`w-full rounded-lg  text-white py-4 ${
              default_plan ? 'bg-green-light' : 'bg-primary'
            }`}
          >
            {button_title}
          </button>
        )}
      </div> */}
    </div>
  );
};

export default PlanCard;
