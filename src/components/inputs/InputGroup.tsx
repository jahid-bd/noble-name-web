import EyeOpenIcon from '@/assets/icons/EyeOpenIcon';
import PassEyeIcon from '@/assets/icons/PassEyeIcon';
import clsx from 'clsx';
import { ErrorMessage, Field, useField } from 'formik';
import { useState } from 'react';

interface Types {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const InputGroup = ({
  label,
  name,
  icon,
  placeholder,
  type = 'text',
  disabled = false,
}: Types) => {
  const [field, meta] = useField(name);

  const [changeType, setChangeType] = useState(type);

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
          // className,
          meta.touched && meta.error && 'border-red-500',
          type === 'password' && 'pr-8',
        )}
      >
        <div>{icon}</div>

        <Field
          name={name}
          type={changeType}
          disabled={disabled}
          placeholder={placeholder}
          className={`w-full outline-none border-none placeholder:text-text-placeholder`}
        />

        {type === 'password' && (
          <button
            type="button"
            className="absolute right-2.5 top-3"
            onClick={() =>
              setChangeType((prev) => (prev === 'text' ? 'password' : 'text'))
            }
          >
            {changeType === 'text' ? <EyeOpenIcon /> : <PassEyeIcon />}
          </button>
        )}

        {/* {type === "password" && (
          <button className="px-4">
            <PassEyeIcon />
          </button>
        )} */}
      </div>

      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm mt-1"
      />
    </div>
  );
};

export default InputGroup;
