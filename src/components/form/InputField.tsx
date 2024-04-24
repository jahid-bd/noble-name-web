import clsx from 'clsx';
import React from 'react';

interface InputProps {
  label?: string;
  name: string;
  placeholder?: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  message?: string;
  className?: string;
  min?: any;
}

const InputField = ({
  name,
  label,
  placeholder,
  type,
  onChange,
  message,
  className,
  min,
}: InputProps) => {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="font-medium text-sm text-text-secondary pb-[6px] block"
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        className={clsx(
          'w-full outline-none border border-border-primary px-[14px] py-[10px] rounded-md shadow-sm placeholder:text-text-placeholder ',
          className
        )}
        min={min}
      />

      {message ? (
        <p className="text-sm text-text-tertiary pt-[6px]">{message}</p>
      ) : null}
    </div>
  );
};

export default InputField;
