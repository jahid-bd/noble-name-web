import VolumeIcon from '@/assets/icons/VolumeIcon';

const SuggestedNameCard = ({ name }: { name: any }) => {
  return (
    <div
      className={`p-5 rounded-xl flex flex-col gap-4 ${
        name?.gender === 'female' ? 'bg-pink' : 'bg-blue'
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <p className="text-white text-base font-bold">{name?.english_name}</p>
          <VolumeIcon />
        </div>

        <p className="text-white text-base font-bold">{name?.arabic_name}</p>
      </div>

      <p className="mb-10 text-white text-xs font-normal">
        {name?.meanings.toString()}
      </p>

      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          {name?.tags?.map((tag: string) => (
            <p
              className={`px-2 py-0.5 rounded-full text-white text-xs font-medium ${
                name?.gender === 'female' ? 'bg-dark-pink' : 'bg-dark-blue '
              }`}
            >
              {tag}
            </p>
          ))}
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
