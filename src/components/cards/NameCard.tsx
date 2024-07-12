'use client';
import BookmarkIcon from '@/assets/icons/BookmarkIcon';
import LoveIcon from '@/assets/icons/LoveIcon';
import ShareIcon from '@/assets/icons/ShareIcon';
import VolumeIcon from '@/assets/icons/VolumeIcon';
import {
  addUserBookmark,
  addUserFavorite,
  removeUserBookmark,
  removeUserFavorite,
  shareNameApi,
} from '@/services/api';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import SocialMedia from '../buttons/SocailMedia';

const NameCard = ({ name }: { name: any }) => {
  const queryClient = useQueryClient();
  const socialRef = useRef<HTMLDivElement>(null);
  const [openSocial, setOpenSocial] = useState(false);

  const { mutate: addFavorite } = useMutation({
    mutationFn: (nameID: string) => addUserFavorite(nameID),
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    },
    onSuccess: (data: any) => {
      toast.success('Name favorite successfully.');
      queryClient.invalidateQueries();
    },
  });

  const { mutate: removeFavorite } = useMutation({
    mutationFn: (id: string) => removeUserFavorite(id),
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    },
    onSuccess: (data: any) => {
      toast.success('Name favorite remove successfully.');
      queryClient.invalidateQueries();
    },
  });

  const { mutate: addBookmark } = useMutation({
    mutationFn: (nameID: string) => addUserBookmark(nameID),
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    },
    onSuccess: (data: any) => {
      toast.success('Name bookmark successfully.');
      queryClient.invalidateQueries();
    },
  });

  const { mutate: removeBookmark } = useMutation({
    mutationFn: (id: string) => removeUserBookmark(id),
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    },
    onSuccess: (data: any) => {
      toast.success('Name bookmark remove successfully.');
      queryClient.invalidateQueries();
    },
  });

  const { mutate: shareName } = useMutation({
    mutationFn: (nameID: string) => shareNameApi(nameID),
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    },
    onSuccess: (data: any) => {
      queryClient.invalidateQueries();
    },
  });

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
      className={`p-5 rounded-xl flex flex-col gap-4 relative h-full justify-between ${
        name?.name?.gender === 'girl' ? 'bg-pink' : 'bg-blue'
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
        {name?.name?.meanings?.toString()}
      </p>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {name?.name?.origin && (
            <p
              className={`px-2 py-0.5 rounded-full text-white text-xs font-medium capitalize ${
                name?.name?.gender === 'girl' ? 'bg-dark-pink' : 'bg-dark-blue '
              }`}
            >
              {name?.name?.origin}
            </p>
          )}

          {name?.name?.historic_significance && (
            <p
              className={`px-2 py-0.5 rounded-full text-white text-xs font-medium capitalize ${
                name?.name?.gender === 'girl' ? 'bg-dark-pink' : 'bg-dark-blue '
              }`}
            >
              Historic
            </p>
          )}
        </div>

        <div className="flex gap-3 items-center">
          <button
            type="button"
            onClick={() =>
              name?.isFavorite
                ? removeFavorite(name?.name?._id)
                : addFavorite(name?.name?._id)
            }
          >
            <LoveIcon isFavorite={name?.isFavorite} />
          </button>

          <button
            type="button"
            onClick={() =>
              name?.isBookmarked
                ? removeBookmark(name?.name?._id)
                : addBookmark(name?.name?._id)
            }
          >
            <BookmarkIcon isBookmarked={name?.isBookmarked} />
          </button>

          <button type="button" onClick={() => setOpenSocial(true)}>
            <ShareIcon />
          </button>
        </div>
      </div>

      {openSocial && (
        <>
          <div
            className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-white bg-opacity-35"
            ref={socialRef}
          >
            <SocialMedia handleShare={() => shareName(name?.name?._id)} />
          </div>
        </>
      )}
    </div>
  );
};

export default NameCard;
