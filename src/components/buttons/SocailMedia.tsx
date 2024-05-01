'use client';

import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';

const SocialMedia = () => {
  const shareUrl = 'www.bplabels.com';

  return (
    <div className="bg-white px-4 py-4 rounded-md shadow-md w-fit">
      <h3 className="mb-3 text-lg">Share social media</h3>

      <div className="flex gap-2">
        <EmailShareButton url={shareUrl}>
          <EmailIcon round={true} size={32} />
        </EmailShareButton>

        <FacebookShareButton url={shareUrl}>
          <FacebookIcon round={true} size={32} />
        </FacebookShareButton>

        <LinkedinShareButton url={shareUrl}>
          <LinkedinIcon round={true} size={32} />
        </LinkedinShareButton>

        <TelegramShareButton url={shareUrl}>
          <TelegramIcon round={true} size={32} />
        </TelegramShareButton>

        <TwitterShareButton url={shareUrl}>
          <TwitterIcon round={true} size={32} />
        </TwitterShareButton>

        <WhatsappShareButton url={shareUrl}>
          <WhatsappIcon round={true} size={32} />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default SocialMedia;
