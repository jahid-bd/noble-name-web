import CheckIcon from '@/assets/icons/CheckIcon';
import XIcon from '@/assets/icons/XIcon';
import Link from 'next/link';

interface PlanProps {
  title: string;
  price: number;
  features: string[];
  description: string;
  button_title: string;
  active_plan?: boolean;
  default_plan?: boolean;
  active_membership?: boolean;
  onClick?: () => void;
}

const PlanCard = ({
  title,
  price,
  onClick,
  features,
  description,
  active_plan,
  default_plan,
  button_title,
  active_membership,
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
              a year
            </sub>
          )}
        </p>
      </div>

      <div className="border-y border-border-secondary p-8">
        <h4 className="text-base font-semibold text-text-primary mb-6">
          FEATURES
        </h4>

        <ul className="flex flex-col gap-5">
          <li className="flex gap-3 items-center">
            <CheckIcon /> <span>3 searches a day</span>
          </li>

          <li className="flex gap-3 items-center">
            <CheckIcon /> <span>Add to love</span>
          </li>

          <li className="flex gap-3 items-center">
            <CheckIcon />
            <span>Add to favorite</span>
          </li>

          <li className="flex gap-3 items-center">
            <CheckIcon /> <span>Just one device</span>
          </li>

          <li className="flex gap-3 items-center">
            <XIcon />
            <span>Unlimited Results</span>
          </li>

          <li className="flex gap-3 items-center">
            <XIcon />
            <span>No Ads</span>
          </li>
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
      </div>
    </div>
  );
};

export default PlanCard;
