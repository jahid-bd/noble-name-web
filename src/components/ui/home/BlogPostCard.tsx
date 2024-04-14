import type { NextPage } from 'next';

export type BlogPostCardType = {
  image?: string;
  heading?: string;
  supportingText?: string;
};

const BlogPostCard: NextPage<BlogPostCardType> = ({
  image,
  heading,
  supportingText,
}) => {
  return (
    <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[320px] max-w-full text-left text-5xl text-colors-text-text-primary-900 font-text-md-semibold cursor-pointer">
      <img
        className="self-stretch h-60 relative rounded-radius-2xl max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src={image}
      />
      <div className="self-stretch flex flex-col items-start justify-start max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px] max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start max-w-full">
              <h3 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit inline-block max-w-full mq450:text-lgi mq450:leading-[26px]">
                {heading}
              </h3>
            </div>
            <div className="self-stretch relative text-base leading-[24px] text-colors-text-text-tertiary-600 [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical]">
              {supportingText}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPostCard;
