import VolumeIcon from '@/assets/icons/VolumeIcon';

const SuggestedNameCard = ({ name }: { name: any }) => {
  const handleSpeech = (text: string) => {
    const value = new SpeechSynthesisUtterance(text);

    window.speechSynthesis.speak(value);
  };

  return (
    <div
      className={`p-5 rounded-xl flex flex-col gap-4 h-full justify-between ${
        name?.gender === 'girl' ? 'bg-pink' : 'bg-blue'
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <p className="text-white text-base font-bold">{name?.english_name}</p>

          <span onClick={() => handleSpeech(name?.english_name)}>
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

        <div>
          {name?.status === 'approved' && (
            <p className="text-sm font-semibold px-2 py-1 text-white bg-primary rounded-md">
              Approved
            </p>
          )}

          {name?.status === 'rejected' && (
            <p className="text-sm font-semibold px-2 py-1 text-white bg-dark-pink rounded-md">
              Rejected
            </p>
          )}

          {name?.status === 'pending' && (
            <p className="text-sm font-semibold px-2 py-1 text-white bg-green-600 rounded-md">
              Pending
            </p>
          )}
        </div>

        {/* <div className="flex gap-3 items-center">
          <button type="button">
            <LoveIcon isFavorite={name?.isFavorite} />
          </button>

          <button type="button">
            <BookmarkIcon isBookmarked={name?.isBookmarked} />
          </button>

          <button type="button">
            <ShareIcon />
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default SuggestedNameCard;
