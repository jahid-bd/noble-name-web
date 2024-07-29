'use client';

import VolumeIcon from '@/assets/icons/VolumeIcon';

const TopListNameCard = ({ name }: { name: any }) => {
  const handleSpeech = (text: string) => {
    const value = new SpeechSynthesisUtterance(text);

    window.speechSynthesis.speak(value);
  };

  return (
    <div
      className={`p-5 rounded-xl flex flex-col gap-4 relative h-full justify-between ${
        name?.gender === 'girl' ? 'bg-pink' : 'bg-blue'
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <p className="text-white text-base font-bold">{name?.english_name}</p>

          <span
            className="cursor-pointer"
            onClick={() => handleSpeech(name?.english_name)}
          >
            <VolumeIcon />
          </span>
        </div>

        <p className="text-white text-base font-bold">{name?.arabic_name}</p>
      </div>

      <p className="mb-10 text-white text-xs font-normal">
        {name?.meanings?.toString()}
      </p>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {name?.origin && (
            <p
              className={`px-2 py-0.5 rounded-full text-white text-xs font-medium capitalize ${
                name?.gender === 'girl' ? 'bg-dark-pink' : 'bg-dark-blue '
              }`}
            >
              {name?.origin}
            </p>
          )}

          {name?.historic_significance && (
            <p
              className={`px-2 py-0.5 rounded-full text-white text-xs font-medium capitalize ${
                name?.gender === 'girl' ? 'bg-dark-pink' : 'bg-dark-blue '
              }`}
            >
              Historic
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopListNameCard;
