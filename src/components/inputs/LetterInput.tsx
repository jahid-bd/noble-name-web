import clsx from 'clsx';

const LETTER = [
  { id: 1, value: 'a' },
  { id: 2, value: 'b' },
  { id: 3, value: 'c' },
  { id: 4, value: 'd' },
  { id: 5, value: 'e' },
  { id: 6, value: 'f' },
  { id: 7, value: 'g' },
  { id: 8, value: 'h' },
  { id: 9, value: 'i' },
  { id: 10, value: 'j' },
  { id: 11, value: 'k' },
  { id: 12, value: 'l' },
  { id: 13, value: 'm' },
  { id: 14, value: 'n' },
  { id: 15, value: 'o' },
  { id: 16, value: 'p' },
  { id: 17, value: 'q' },
  { id: 18, value: 'r' },
  { id: 19, value: 's' },
  { id: 20, value: 't' },
  { id: 21, value: 'u' },
  { id: 22, value: 'v' },
  { id: 23, value: 'w' },
  { id: 24, value: 'x' },
  { id: 25, value: 'y' },
  { id: 26, value: 'z' },
];

const LetterInput = ({
  label,
  onClick,
  selected,
}: {
  label: string;
  onClick: (value: string) => void;
  selected: string;
}) => {
  return (
    <div>
      <p className="font-medium text-sm text-text-secondary pb-[6px] block">
        {label}
      </p>

      <div className="flex flex-wrap gap-2 px-[14px] py-2.5 border border-border-secondary rounded-lg">
        {LETTER?.map((item) => (
          <button
            type="button"
            key={item?.id}
            className={clsx(
              'px-2 py-1 shadow-modal rounded-lg border  border-border-primary text-sm font-medium text-text-secondary capitalize',
              selected === item.value && 'bg-primary text-white'
            )}
            onClick={() => onClick(item.value)}
          >
            {item.value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LetterInput;
