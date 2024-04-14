import type { NextPage } from 'next';

const FeaturesSection: NextPage = () => {
  return (
    <section className="self-stretch bg-component-colors-components-buttons-primary-button-primary-fg overflow-hidden flex flex-col items-center justify-start py-spacing-9xl px-5 box-border max-w-full text-left text-11xl text-colors-text-text-primary-900 font-text-md-semibold mq750:gap-[24px] mq750:pt-[62px] mq750:pb-[62px] mq750:box-border">
      <div className="w-[1288px] flex flex-row items-center justify-start [row-gap:20px] max-w-full mq1100:flex-wrap">
        <div className="w-[630px] flex flex-col items-start justify-center py-[50px] px-0 box-border min-w-[630px] max-w-full mq750:gap-[24px] mq750:pt-8 mq750:pb-8 mq750:box-border mq750:min-w-full mq1100:flex-1">
          <div className="w-[560px] flex flex-row items-start justify-start max-w-[560px] mq750:max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start max-w-full mq750:gap-[16px]">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
                  <h2 className="m-0 relative text-inherit tracking-[-0.02em] leading-[44px] font-semibold font-inherit inline-block max-w-full mq750:text-5xl mq750:leading-[35px] mq450:text-lg mq450:leading-[26px]">
                    Spiritual Significance of Naming
                  </h2>
                  <div className="self-stretch relative text-lg leading-[28px] text-colors-text-text-tertiary-600">
                    <p className="[margin-block-start:0] [margin-block-end:18px]">
                      Welcome to Noble Names, your premier destination for
                      unlocking the spiritual significance of Muslim names. In
                      Islam, naming transcends mere labels; it&rsquo;s a sacred
                      journey shaping identity and destiny.
                    </p>
                    <p className="[margin-block-start:0] [margin-block-end:18px]">
                      Our carefully curated collection not only embraces the
                      linguistic beauty of Arabic but also offers names with
                      positive, impactful meanings deeply rooted in the
                      teachings of the Quran. Each name in our selection is a
                      reflection of timeless wisdom, guiding your child toward a
                      blessed and purposeful life.
                    </p>
                    <p className="m-0">
                      Start this profound naming journey with Noble Names, where
                      every name carries the essence of Islamic grace and
                      virtue, ensuring a connection to profound spiritual roots
                      for your cherished one.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="h-[560px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[428px] mq750:min-w-full"
          loading="lazy"
          alt=""
          src="/images/feature-image.png"
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
