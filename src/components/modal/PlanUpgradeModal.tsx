'use client';

import Link from 'next/link';

const PlanUpgradeModal = ({
  handleClosePlanModal,
}: {
  handleClosePlanModal?: () => void;
}) => {
  return (
    <div className="bg-black bg-opacity-10 absolute top-0 left-0 right-0 bottom-0 z-40 flex items-center justify-center">
      <div className="md:w-[600px] w-[80%] mx-auto px-1.5 md:px-10">
        <div className="px-4 py-8 md:px-8 bg-white rounded-[10px] shadow-modal relative">
          <button
            type="button"
            onClick={handleClosePlanModal}
            className="absolute top-3 right-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.16992 14.8299L14.8299 9.16992"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.8299 14.8299L9.16992 9.16992"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <div className="flex items-center justify-center mb-4">
            <h3 className="text-xl font-semibold text-text-tertiary text-center">
              Your Plan Limit is Finished
            </h3>

            {/* <button type="button" onClick={() => console.log('close')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.16992 14.8299L14.8299 9.16992"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.8299 14.8299L9.16992 9.16992"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button> */}
          </div>

          <div className="text-center pt-5">
            <Link
              href="/membership-plan"
              className="text-center py-3 bg-primary rounded-md text-white px-10 mt-4"
            >
              Choose your plan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanUpgradeModal;
