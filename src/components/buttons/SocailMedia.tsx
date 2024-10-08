'use client';
import { usePathname } from 'next/navigation';
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

const SocialMedia = ({ handleShare }: { handleShare: any }) => {
  const pathName = usePathname();
  const shareUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${pathName}`;

  return (
    <div className="bg-white px-4 py-4 rounded-md shadow-md w-fit">
      <h3 className="mb-3 text-lg">Share social media</h3>

      <div className="flex gap-2">
        <EmailShareButton
          url={shareUrl}
          onClick={() => {
            handleShare();

            window.location.href = `mailto:?subject=${encodeURIComponent(
              'Share',
            )}&body=${encodeURIComponent('Name Share')} ${encodeURIComponent(
              shareUrl,
            )}`;
          }}
          subject="Share"
          body="Hotel detail"
        >
          <EmailIcon round={true} size={32} />
        </EmailShareButton>

        <FacebookShareButton url={shareUrl} onClick={handleShare}>
          <FacebookIcon round={true} size={32} />
        </FacebookShareButton>

        <LinkedinShareButton url={shareUrl} onClick={handleShare}>
          <LinkedinIcon round={true} size={32} />
        </LinkedinShareButton>

        <TelegramShareButton url={shareUrl} onClick={handleShare}>
          <TelegramIcon round={true} size={32} />
        </TelegramShareButton>

        <TwitterShareButton url={shareUrl} onClick={handleShare}>
          <TwitterIcon round={true} size={32} />
        </TwitterShareButton>

        <WhatsappShareButton url={shareUrl} onClick={handleShare}>
          <WhatsappIcon round={true} size={32} />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default SocialMedia;
