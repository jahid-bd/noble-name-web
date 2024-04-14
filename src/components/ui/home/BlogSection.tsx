import type { NextPage } from 'next';
import BlogPostCard from './BlogPostCard';

const BlogSection: NextPage = () => {
  return (
    <section className="self-stretch bg-component-colors-components-buttons-primary-button-primary-fg overflow-hidden flex flex-col items-center justify-start py-[70px] px-5 box-border gap-[64px] max-w-full text-center text-11xl text-colors-text-text-primary-900 font-text-md-semibold mq750:gap-[32px] mq750:pt-[45px] mq750:pb-[45px] mq750:box-border mq450:gap-[16px]">
      <div className="w-full flex flex-col items-center justify-start gap-[12px] min-w-[480px] max-w-[768px] mq750:max-w-full">
        <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[44px] font-semibold font-inherit mq750:text-5xl mq750:leading-[35px] mq450:text-lg mq450:leading-[26px]">
          Latest Articles
        </h2>
        <div className="self-stretch relative text-xl leading-[30px] text-colors-text-text-tertiary-600 mq450:text-base mq450:leading-[24px]">
          Learn more about Muslim Names and Parenting
        </div>
      </div>
      <div className="w-full flex flex-col items-start justify-start max-w-[1280px] text-left text-5xl mq750:gap-[16px] mq1275:max-w-full">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-1 pl-0 box-border gap-[48px_30px] max-w-full mq750:gap-[15px]">
          <BlogPostCard
            image="/images/article-1.png"
            heading="At consectetur enim semper"
            supportingText="Laoreet sed pellentesque morbi eget mauris lectus risus cursus. Amet quam est nisl risus eu dolor."
          />
          <BlogPostCard
            image="/images/article-2.png"
            heading="Augue eros elit in nibh vitae dui"
            supportingText="Mi convallis commodo in aliquam fusce. Nibh ac blandit praesent nec rhoncus sit pharetra adipiscing."
          />
          <BlogPostCard
            image="/images/article-3.png"
            heading="Amet id feugiat rhoncus sed in"
            supportingText="Imperdiet ipsum tincidunt sed porttitor. Auctor volutpat egestas non cras. Dui pulvinar lobortis cum."
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
