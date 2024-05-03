'use client';
import BookmarkIcon from '@/assets/icons/BookmarkIcon';
import LoveIcon from '@/assets/icons/LoveIcon';
import ShareIcon from '@/assets/icons/ShareIcon';
import VolumeIcon from '@/assets/icons/VolumeIcon';
import { useCallback, useEffect, useRef, useState } from 'react';
import SocialMedia from '../buttons/SocailMedia';

const NameCard = ({ name }: { name: any }) => {
  const socialRef = useRef<HTMLDivElement>(null);
  const [openSocial, setOpenSocial] = useState(false);

  const handleSpeech = (text: string) => {
    const value = new SpeechSynthesisUtterance(text);

    window.speechSynthesis.speak(value);
  };

  const handleClickOutside = useCallback((event: any) => {
    if (socialRef.current && socialRef?.current?.contains(event.target)) {
      return setOpenSocial(true);
    }

    return setOpenSocial(false);
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [handleClickOutside]);

  return (
    <div
      className={`p-5 rounded-xl flex flex-col gap-4 relative ${
        name?.name?.gender === 'female' ? 'bg-pink' : 'bg-blue'
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <p className="text-white text-base font-bold">
            {name?.name?.english_name}
          </p>

          <span
            className="cursor-pointer"
            onClick={() => handleSpeech(name?.name?.english_name)}
          >
            <VolumeIcon />
          </span>
        </div>

        <p className="text-white text-base font-bold">
          {name?.name?.arabic_name}
        </p>
      </div>

      <p className="mb-10 text-white text-xs font-normal">
        {name?.name?.meanings.toString()}
      </p>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {name?.name?.tags?.map((tag: string) => (
            <p
              className={`px-2 py-0.5 rounded-full text-white text-xs font-medium ${
                name?.name?.gender === 'female'
                  ? 'bg-dark-pink'
                  : 'bg-dark-blue '
              }`}
            >
              {tag}
            </p>
          ))}
        </div>

        <div className="flex gap-3 items-center">
          <button type="button">
            <LoveIcon isFavorite={name?.isFavorite} />
          </button>

          <button type="button">
            <BookmarkIcon isBookmarked={name?.isBookmarked} />
          </button>

          <button type="button" onClick={() => setOpenSocial(true)}>
            <ShareIcon />
          </button>
        </div>
      </div>

      {openSocial && (
        <div
          className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-white bg-opacity-35"
          ref={socialRef}
        >
          <SocialMedia />
        </div>
      )}
    </div>
  );
};

export default NameCard;
