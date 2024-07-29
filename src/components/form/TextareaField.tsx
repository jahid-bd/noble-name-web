import clsx from 'clsx';

interface InputProps {
  label?: string;
  name: string;
  placeholder?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  message?: string;
  className?: string;
  register?: any;
  defaultValue?: string;
  error?: any;
  disabled?: boolean;
  isCustom?: boolean;
}

const TextareaField = ({
  name,
  label,
  placeholder,
  onChange,
  message,
  className,
  register = () => {},
  defaultValue,
  error,
  disabled,
  value,
  isCustom,
}: InputProps) => {
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

      {!isCustom ? (
        <textarea
          // type={type}
          id={name}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          className={clsx(
            'w-full outline-none border border-border-primary px-[14px] py-[10px] rounded-md shadow-sm placeholder:text-text-placeholder ',
            className,
            error && 'border-red-500',
          )}
          {...register(name, { value: defaultValue })}
        />
      ) : (
        <textarea
          id={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          name={name}
          disabled={disabled}
          className={clsx(
            'w-full outline-none border border-border-primary px-[14px] py-[10px] rounded-md shadow-sm placeholder:text-text-placeholder ',
            className,
            error && 'border-red-500',
          )}
        />
      )}

      {error ? <p className="text-sm text-red-500 pt-[6px]">{error}</p> : null}

      {message ? (
        <p className="text-sm text-text-tertiary pt-[6px]">{message}</p>
      ) : null}
    </div>
  );
};

export default TextareaField;
