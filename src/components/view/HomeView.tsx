'use client';

import ChildHand from '@/assets/images/child_hand.jpg';
import Button from '@/components/buttons/Button';
import NameSearchSection from '@/components/section/NameSearchSection';
import {
  createSuggestedName,
  getAllBlog,
  getUserProfile,
} from '@/services/api';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Caveat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import AddNameModal from '../modal/AddNameModal';
import BlogHomeCardSection from '../section/BlogHomeCardSection';
import NewsLetterSection from '../section/NewsLetterSection';

const caveat = Caveat({ subsets: ['latin'] });

const HomeView = () => {
  const router = useRouter();
  const [openAddName, setOpenAddName] = useState(false);

  const { data: user, isError } = useQuery({
    queryKey: ['logged-in-user'],
    queryFn: getUserProfile,
  });

  const { data: blogs } = useQuery({
    queryKey: ['blogs'],
    queryFn: () => getAllBlog(1, 9),
  });

  const { mutate: addSuggestedName } = useMutation({
    mutationFn: (data: any) => createSuggestedName(data),
    onError: (error: any) => {
      if (error?.response?.data?.message === 'Authentication Failed') {
        setTimeout(() => {
          router.push('/auth/sign-up');
        }, 5000);

        return toast.error('To Add a New Name, Please Register');
      }

      toast.error(error?.response?.data?.message);
    },
    onSuccess: () => {
      toast.success('Add suggested name successfully');
      setOpenAddName(false);
    },
  });

  useEffect(() => {
    if (openAddName) {
      document.body.style.scrollBehavior = 'smooth';
      window.scrollTo(0, 0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [openAddName]);

  return (
    <main className="bg-white pb-[60px] md:pb-[60px]">
      <section className="bg-black py-8 md:py-16">
        <div className="container mx-auto px-[6px]">
          <h1 className="text-[28px] md:text-[32px] font-semibold text-white text-center mb-16">
            Search Muslim Baby Names With Endless Possibilities
          </h1>

          <NameSearchSection />
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto px-[6px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
                Spiritual Significance of Naming
              </h3>

              <p className="text-base md:text-lg font-normal text-text-tertiary mb-4">
                Welcome to Noble Names, your premier destination for unlocking
                the spiritual significance of Muslim names and understanding
                them. In Islam, naming transcends mere labels; it&apos;s a
                sacred journey shaping our identity and destiny.
              </p>

              <p className="text-base md:text-lg font-normal text-text-tertiary mb-4">
                Our carefully curated collection not only embraces the
                linguistic beauty of Arabic, Persian, Turkish, Somali, Sudanese,
                Indonesian, Malaysian, Kurdish and Urdu but also offers names
                with positive, impactful meanings deeply rooted in the teachings
                of the Quran. Each name in our selection is a reflection of
                timeless beauty and wisdom, guiding your child toward a blessed
                and purposeful life.
              </p>

              <p className="text-base md:text-lg font-normal text-text-tertiary">
                Start this profound naming journey with Noble Names creating a
                Noble Identity, where every name carries the essence of Islamic
                grace and virtue, ensuring a connection to profound spiritual
                roots for your cherished one.
              </p>

              <div className="flex justify-between items-center mt-8">
                <div>
                  <p className={caveat.className}>
                    <span className="font-bold text-lg">N Vileyat</span>
                  </p>
                  <p className="text-base font-normal">Founder</p>
                </div>

                {!user && (
                  <Link
                    href="/auth/sign-up"
                    className="bg-primary rounded-md text-base font-semibold text-white py-2.5 px-4 flex items-center justify-center button-hover"
                  >
                    Register
                  </Link>
                )}
              </div>
            </div>

            <div>
              <Image
                src={ChildHand}
                alt="child hand"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      <NewsLetterSection />

      <section className="bg-white py-16">
        <div className="container mx-auto px-[6px]">
          <div className="mb-11 md:mb-16">
            <h3 className="text-3xl md:text-4xl font-semibold text-text-primary mb-3 text-center">
              Latest Articles
            </h3>

            <p className="text-text-tertiary text-lg md:text-xl font-normal text-center">
              Learn about Muslim Naming, Parenting and more…
            </p>
          </div>

          <BlogHomeCardSection blogs={blogs} />
        </div>
      </section>

      <section className="bg-white max-md:px-1.5">
        <div className="container mx-auto bg-border-secondary rounded-2xl px-4 md:px-8 py-8">
          <div className="flex flex-col md:flex-row gap-5 md:items-center justify-between">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold text-text-primary mb-3 text-center md:text-left">
                Suggest a New Name
              </h3>

              <p className="text-text-tertiary text-lg md:text-xl font-normal text-center md:text-left">
                Take part in our initiative to create the largest database of
                Muslim names and earn rewards in the hereafter.
              </p>
            </div>

            <div className="w-full md:w-[165px]">
              <Button
                className="text-base w-full py-2.5 px-4"
                onClick={() => setOpenAddName(true)}
              >
                Add New Name
              </Button>
            </div>
          </div>
        </div>
      </section>

      {openAddName && (
        <AddNameModal
          title="Add a New Name"
          handleSubmitForm={addSuggestedName}
          handleClose={() => setOpenAddName(false)}
        />
      )}
    </main>
  );
};

export default HomeView;
