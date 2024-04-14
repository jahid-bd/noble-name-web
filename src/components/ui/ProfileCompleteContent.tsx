import GenderFemale from '../feature/form/GenderFemale';
import GenderMale from '../feature/form/GenderMale';

const ProfileCompleteContent = () => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full text-left text-sm text-colors-text-text-secondary-700 font-text-md-semibold mq675:gap-[16px]">
      <GenderFemale label="Age" text="Age" />
      <GenderFemale
        label="Gender"
        text="Male"
        inputMinWidth="50px"
        textMinWidth="37px"
        supportingTextMinWidth="37px"
      />
      <GenderFemale
        label="Country"
        text="Select Country"
        inputMinWidth="55px"
        textMinWidth="115px"
        supportingTextMinWidth="115px"
      />
      <GenderFemale
        label="Sect"
        text="Select one"
        inputMinWidth="31px"
        textMinWidth="81px"
        supportingTextMinWidth="81px"
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
        <div className="relative leading-[20px] font-medium">
          Are you expecting a baby
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[32px] min-w-[158px]">
            <div className="self-stretch rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-fg flex flex-row items-start justify-start py-2.5 px-4 gap-[8px] text-colors-text-text-tertiary-600 border-[1px] border-solid border-colors-border-border-primary">
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="w-4 h-4 relative rounded-radius-full box-border overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-border-primary" />
              </div>
              <input
                className="w-7 [border:none] [outline:none] font-medium font-text-md-semibold text-base bg-[transparent] h-6 relative leading-[24px] text-colors-text-text-primary-900 text-left inline-block p-0"
                placeholder="Yes"
                type="text"
              />
              <div className="w-[72px] relative leading-[20px] hidden">
                $10/month
              </div>
              <div className="w-[712px] relative leading-[20px] hidden max-w-full">
                Includes up to 10 users, 20GB individual data and access to all
                features.
              </div>
            </div>
            <GenderMale label="Month" text="Select Month" />
            <div className="relative leading-[20px] font-medium">
              Are you already a parent
            </div>
          </div>
          <div className="flex-1 flex flex-col items-end justify-start gap-[32px] min-w-[158px] text-colors-text-text-tertiary-600">
            <div className="self-stretch rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-fg flex flex-row items-start justify-start py-2.5 px-4 gap-[8px] border-[1px] border-solid border-colors-border-border-primary">
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <div className="w-4 h-4 relative rounded-radius-full box-border overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-border-primary" />
              </div>
              <input
                className="w-[22px] [border:none] [outline:none] font-medium font-text-md-semibold text-base bg-[transparent] h-6 relative leading-[24px] text-colors-text-text-primary-900 text-left inline-block p-0"
                placeholder="No"
                type="text"
              />
              <div className="w-[72px] relative leading-[20px] hidden">
                $10/month
              </div>
              <div className="w-[712px] relative leading-[20px] hidden max-w-full">
                Includes up to 10 users, 20GB individual data and access to all
                features.
              </div>
            </div>
            <GenderMale
              label="Year"
              text="Select Year"
              propMinWidth="30px"
              propMinWidth1="87px"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[20px] text-colors-text-text-tertiary-600">
          <div className="flex-1 rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-fg box-border flex flex-row items-start justify-start py-2.5 px-4 gap-[8px] min-w-[158px] border-[1px] border-solid border-colors-border-border-primary">
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <div className="w-4 h-4 relative rounded-radius-full box-border overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-border-primary" />
            </div>
            <input
              className="w-7 [border:none] [outline:none] font-medium font-text-md-semibold text-base bg-[transparent] h-6 relative leading-[24px] text-colors-text-text-primary-900 text-left inline-block p-0"
              placeholder="Yes"
              type="text"
            />
            <div className="w-[72px] relative leading-[20px] hidden">
              $10/month
            </div>
            <div className="w-[712px] relative leading-[20px] hidden max-w-full">
              Includes up to 10 users, 20GB individual data and access to all
              features.
            </div>
          </div>
          <div className="flex-1 rounded-radius-md bg-component-colors-components-buttons-primary-button-primary-fg box-border flex flex-row items-start justify-start py-2.5 px-4 gap-[8px] min-w-[158px] border-[1px] border-solid border-colors-border-border-primary">
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <div className="w-4 h-4 relative rounded-radius-full box-border overflow-hidden shrink-0 border-[1px] border-solid border-colors-border-border-primary" />
            </div>
            <input
              className="w-[22px] [border:none] [outline:none] font-medium font-text-md-semibold text-base bg-[transparent] h-6 relative leading-[24px] text-colors-text-text-primary-900 text-left inline-block p-0"
              placeholder="No"
              type="text"
            />
            <div className="w-[72px] relative leading-[20px] hidden">
              $10/month
            </div>
            <div className="w-[712px] relative leading-[20px] hidden max-w-full">
              Includes up to 10 users, 20GB individual data and access to all
              features.
            </div>
          </div>
        </div>
      </div>
      <GenderFemale
        label="How many children you have?"
        text="Select"
        inputMinWidth="unset"
        textMinWidth="49px"
        supportingTextMinWidth="49px"
      />
      <GenderFemale
        label="Age group of children "
        text="Select"
        inputMinWidth="unset"
        textMinWidth="49px"
        supportingTextMinWidth="49px"
      />
      <GenderFemale
        label="Age group of children "
        text="Select"
        inputMinWidth="unset"
        textMinWidth="49px"
        supportingTextMinWidth="49px"
      />
    </div>
  );
};

export default ProfileCompleteContent;
