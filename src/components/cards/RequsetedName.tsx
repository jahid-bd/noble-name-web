'use client';

import VolumeIcon from '@/assets/icons/VolumeIcon';
import { useState } from 'react';

const RequestedNameCard = ({
  name,
  handleReject,
  handleApprove,
}: {
  name: any;
  handleReject: () => void;
  handleApprove: () => void;
}) => {
  const [isHover, setIsHover] = useState(false);

  const handleSpeech = (text: string) => {
    const value = new SpeechSynthesisUtterance(text);

    window.speechSynthesis.speak(value);
  };

  return (
    <div
      className={`p-5 rounded-xl flex flex-col gap-4 relative ${
        name?.gender === 'girl' ? 'bg-pink' : 'bg-blue'
      }`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
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
        {name?.meanings.toString()}
      </p>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {name?.tags?.map((tag: string, index: any) => (
            <p
              key={index}
              className={`px-2 py-0.5 rounded-full text-white text-xs font-medium ${
                name?.gender === 'girl' ? 'bg-dark-pink' : 'bg-dark-blue '
              }`}
            >
              {tag}
            </p>
          ))}
        </div>
      </div>

      <div
        className={`absolute h-[70px] left-0 right-0 bottom-0 bg-white bg-opacity-80 cursor-pointer ${
          isHover ? 'block' : 'hidden'
        }`}
      >
        <div className="flex items-center gap-3 w-full h-full justify-center px-3">
          <button
            type="button"
            onClick={handleReject}
            className="w-full bg-slate-400 rounded-md text-base font-semibold text-white px-2.5 py-2 flex items-center justify-center hover:bg-dark-pink"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={handleApprove}
            className="w-full bg-primary rounded-md text-base font-semibold text-white px-2.5 py-2 flex items-center justify-center button-hover"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestedNameCard;
