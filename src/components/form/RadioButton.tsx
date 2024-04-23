interface PropTypes {
  label: string;
  text: string;
  active: boolean | null;
  onClick: () => void;
}

const RadioButton = ({ label, text, active, onClick }: PropTypes) => {
  return (
    <button onClick={onClick} className="w-full">
      <label
        htmlFor={label}
        className="font-medium text-sm text-text-secondary pb-3 block text-left"
      >
        {label}
      </label>

      <div className="w-full  border border-border-primary px-4 py-[10px] flex items-center gap-2 cursor-pointer rounded-md">
        <div className="w-4 h-4 rounded-full border border-border-primary p-[2px]">
          {active === true ? (
            <div className="bg-primary rounded-full w-full h-full"></div>
          ) : null}
        </div>
        <div>
          <span>{text}</span>
        </div>
      </div>
    </button>
  );
};

export default RadioButton;
