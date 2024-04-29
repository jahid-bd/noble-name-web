"use client";

import Image from "next/image";
import Button from "@/components/buttons/Button";
import BlogCard from "@/components/cards/BlogCard";
import InputField from "@/components/form/InputField";
import ChildHand from "@/assets/images/child_hand.jpg";
import NameSearchSection from "@/components/section/NameSearchSection";
import AddNameModal from "../modal/AddNameModal";

const HomeView = () => {
    const handleChange = () => {
        console.log("hello");
    };

    return (
        <main className="bg-white pb-[60px] md:pb-[60px]">
            <section className="bg-black py-16">
                <div className="container mx-auto px-[6px]">
                    <h1 className="text-[28px] md:text-[32px] font-semibold text-white text-center mb-16">
                        Search muslim names with endless possibilities
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
                                Welcome to Noble Names, your premier destination
                                for unlocking the spiritual significance of
                                Muslim names. In Islam, naming transcends mere
                                labels; it's a sacred journey shaping identity
                                and destiny.
                            </p>

                            <p className="text-base md:text-lg font-normal text-text-tertiary mb-4">
                                Our carefully curated collection not only
                                embraces the linguistic beauty of Arabic but
                                also offers names with positive, impactful
                                meanings deeply rooted in the teachings of the
                                Quran. Each name in our selection is a
                                reflection of timeless wisdom, guiding your
                                child toward a blessed and purposeful life.{" "}
                            </p>

                            <p className="text-base md:text-lg font-normal text-text-tertiary">
                                Start this profound naming journey with Noble
                                Names, where every name carries the essence of
                                Islamic grace and virtue, ensuring a connection
                                to profound spiritual roots for your cherished
                                one.
                            </p>
                        </div>

                        <div>
                            <Image src={ChildHand} alt="child hand" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-green-disabled py-16">
                <div className="container mx-auto px-[6px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:items-center">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-semibold text-text-primary mb-3 text-center md:text-left">
                                Sign up for our newsletter
                            </h3>

                            <p className="text-text-tertiary text-lg md:text-xl font-normal text-center md:text-left">
                                Be the first to know about releases and industry
                                news and insights.
                            </p>
                        </div>

                        <form className="md:flex md:justify-end md:gap-4 md:items-center">
                            <div className="mb-4 md:mb-0">
                                <InputField
                                    type="email"
                                    name="email"
                                    value="Amanullha Zoha"
                                    placeholder="Enter your email"
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <Button className="text-base">Subscribe</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <section className="bg-white py-16">
                <div className="container mx-auto px-[6px]">
                    <div className="mb-11 md:mb-16">
                        <h3 className="text-3xl md:text-4xl font-semibold text-text-primary mb-3 text-center">
                            Latest Articles
                        </h3>

                        <p className="text-text-tertiary text-lg md:text-xl font-normal text-center">
                            Learn more about Muslim Names and Parenting
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <BlogCard />
                        <BlogCard />
                        <BlogCard />
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="container mx-auto bg-border-secondary rounded-2xl px-4 md:px-8 py-8">
                    <div className="flex flex-col md:flex-row gap-5 md:items-center">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-semibold text-text-primary mb-3 text-center md:text-left">
                                Suggest a New Name
                            </h3>

                            <p className="text-text-tertiary text-lg md:text-xl font-normal text-center md:text-left">
                                Take part in our initiative to create the
                                largest database of Muslim names and earn
                                rewards in the hereafter.
                            </p>
                        </div>

                        <div className="w-full md:w-[165px]">
                            <Button className="text-base w-full py-2.5 px-4">
                                Add New Name
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* <AddNameModal /> */}
        </main>
    );
};

export default HomeView;
