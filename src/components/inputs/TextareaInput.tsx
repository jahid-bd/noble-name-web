import clsx from 'clsx';
import { ErrorMessage, useField } from 'formik';
import { ChangeEvent } from 'react';

interface Types {
  label: string;
  name: string;
  value: string;
  disabled?: boolean;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  disabled = false,
}: Types) => {
  const [field, meta] = useField(name);

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={name}
          className="font-medium text-sm text-text-secondary pb-[6px] block"
        >
          {label}
        </label>
      )}

      <div
        className={clsx(
          'w-full outline-none border border-border-primary px-[14px] py-[10px] rounded-md shadow-sm placeholder:text-text-placeholder relative',
          meta.touched && meta.error && 'border-red-500',
        )}
      >
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full outline-none border-none placeholder:text-text-placeholder`}
        />
      </div>

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default TextareInput;
