const RadioButton = () => {
  return (
    <div className="w-full  border border-border-primary px-4 py-[10px] flex items-center gap-2 cursor-pointer rounded-md">
      <div className="w-4 h-4 rounded-full border border-border-primary p-[2px]">
        <div className="bg-primary rounded-full w-full h-full"></div>
      </div>
      <div>
        <span>Yes</span>
      </div>
    </div>
  );
};

export default RadioButton;
