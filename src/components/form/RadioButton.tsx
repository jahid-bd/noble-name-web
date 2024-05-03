import clsx from 'clsx';

interface PropTypes {
  label?: string;
  text: string;
  active: boolean | null;
  onClick: () => void;
  error?: boolean;
}

const RadioButton = ({ label, text, active, onClick, error }: PropTypes) => {
  return (
    <div onClick={onClick} className="w-full">
      <label
        htmlFor={label}
        className="font-medium text-sm text-text-secondary pb-3 block text-left"
      >
        {label}
      </label>

      <div
        className={clsx(
          'w-full  border border-border-primary px-4 py-[10px] flex items-center gap-2 cursor-pointer rounded-md',
          error && 'border-red-500',
        )}
      >
        <div className="w-4 h-4 rounded-full border border-border-primary p-[2px]">
          {active === true ? (
            <div className="bg-primary rounded-full w-full h-full"></div>
          ) : null}
        </div>
        <div>
          <span>{text}</span>
        </div>
      </div>
      {/* {error ? <p className="text-sm text-red-500 pt-[6px]">{error}</p> : null} */}
    </div>
  );
};

export default RadioButton;
