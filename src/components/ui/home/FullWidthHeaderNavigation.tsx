import type { NextPage } from 'next';

const FullWidthHeaderNavigation: NextPage = () => {
  return (
    <header className="self-stretch h-[94px] bg-whitesmoke box-border flex flex-row items-start justify-center py-4 px-5 top-[0] z-[99] sticky max-w-full text-left text-base text-colors-text-text-primary-900 font-text-md-semibold border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-fg">
      <div className="self-stretch w-[1280px] flex flex-row items-start justify-between max-w-[1280px] gap-[20px] mq1275:max-w-full">
        <div className="self-stretch w-[170.5px] flex flex-row items-center justify-start bg-[url('/images/logo.png')] bg-cover bg-no-repeat bg-[top] cursor-pointer">
          <a href="/">
            <img
              className="h-[62px] w-[170.5px] relative object-cover hidden"
              alt=""
              src="/images/logo.png"
            />
          </a>
        </div>

        <div className="w-[258px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
          <div className="self-stretch h-14 flex flex-row items-start justify-end">
            <div className="h-[314px] w-[258px] rounded-3xs bg-component-colors-components-buttons-primary-button-primary-fg shadow-[0px_20px_40px_rgba(212,_212,_212,_0.25)] overflow-hidden shrink-0 hidden flex-col items-start justify-start">
              <div className="self-stretch flex-1 flex flex-col items-start justify-start py-spacing-xl px-0 gap-[8px] border-b-[1px] border-solid border-colors-border-border-secondary">
                <div className="self-stretch flex-1 flex flex-row items-start justify-start pt-spacing-sm px-spacing-xl pb-spacing-lg">
                  <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[12px]">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[4px]">
                      <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[8px]">
                        <div className="self-stretch relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                          About Us
                        </div>
                        <div className="rounded-radius-full bg-component-colors-utility-success-utility-success-50 hidden flex-row items-center justify-start py-spacing-xxs px-[9px] text-center text-sm text-component-colors-utility-success-utility-success-700 border-[1px] border-solid border-component-colors-utility-success-utility-success-200">
                          <div className="relative leading-[20px] font-medium">
                            New
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch relative text-sm leading-[20px] text-colors-text-text-tertiary-600 hidden overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] whitespace-nowrap">
                        Find the best solution for you.
                      </div>
                    </div>
                    <div className="w-[105px] hidden flex-row items-start justify-start text-sm text-component-colors-components-buttons-tertiary-color-button-tertiary-color-fg">
                      <div className="h-5 flex-1 overflow-hidden flex flex-row items-center justify-center gap-[8px]">
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                          alt=""
                          src="/placeholder.svg"
                        />
                        <div className="self-stretch flex-1 relative leading-[20px] font-semibold whitespace-nowrap">
                          Learn more
                        </div>
                        <img
                          className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                          alt=""
                          src="/arrowright.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-start pt-spacing-sm px-spacing-xl pb-spacing-lg gap-[16px]">
                  <div className="self-stretch flex-1 relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    Blog
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/chevrondown.svg"
                  />
                </div>
                <div className="self-stretch flex-1 flex flex-row items-center justify-start pt-spacing-sm px-container-padding-mobile pb-spacing-lg gap-[16px]">
                  <div className="self-stretch flex-1 relative leading-[24px] font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    Contact Us
                  </div>
                  <img
                    className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                    alt=""
                    src="/chevrondown.svg"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start py-spacing-2xl px-container-padding-mobile text-component-colors-components-buttons-primary-button-primary-fg">
                <div className="self-stretch flex flex-col items-center justify-start gap-[12px]">
                  <div className="self-stretch rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-bg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-spacing-xl gap-[6px] border-[1px] border-solid border-component-colors-components-buttons-primary-button-primary-bg">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder.svg"
                    />
                    <div className="h-6 flex flex-row items-center justify-center py-0 px-spacing-xxs box-border">
                      <div className="self-stretch relative leading-[24px] font-semibold whitespace-nowrap">
                        Sign up
                      </div>
                    </div>
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder.svg"
                    />
                  </div>
                  <div className="self-stretch rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-fg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center py-2.5 px-spacing-xl gap-[6px] text-colors-text-text-secondary-700 border-[1px] border-solid border-colors-border-border-primary">
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder.svg"
                    />
                    <div className="h-6 flex flex-row items-center justify-center py-0 px-spacing-xxs box-border">
                      <div className="self-stretch relative leading-[24px] font-semibold whitespace-nowrap">
                        Log in
                      </div>
                    </div>
                    <img
                      className="h-5 w-5 relative overflow-hidden shrink-0 hidden"
                      alt=""
                      src="/placeholder.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[58px] rounded-rounded-full bg-component-colors-components-buttons-primary-button-primary-fg shadow-[0px_20px_40px_rgba(212,_212,_212,_0.25)] box-border overflow-hidden flex flex-row items-start justify-start py-spacing-md px-spacing-lg gap-[16px] border-[1px] border-solid border-colors-border-border-tertiary">
              <div className="flex flex-col items-center justify-start pt-2 px-0 pb-0">
                <svg
                  width="20"
                  height="14"
                  viewBox="0 0 20 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 7H19M1 1H19M1 13H19"
                    stroke="#344054"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div className="h-10 w-10 relative rounded-radius-full bg-[url('/images/Avatar.png')] bg-cover bg-no-repeat bg-[top]">
                <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-radius-full box-border overflow-hidden border-[0.8px] border-solid border-component-colors-components-avatars-avatar-contrast-border" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FullWidthHeaderNavigation;
