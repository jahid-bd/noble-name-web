import Image from "next/image";
import ChildHand from "@/assets/images/child_hand.jpg";

const BlogDetailView = () => {
    return (
        <main className="bg-white pt-6 md:pt-[26px] pb-[60px] md:pb-[60px]">
            <div className="container mx-auto px-[6px]">
                <div className="w-full lg:w-3/4">
                    <Image
                        src={ChildHand}
                        alt="blog page"
                        className="w-full h-[350px] object-cover"
                    />

                    <h1>
                        Hong Kong Marketing Trends] Hong Kong Marketing Trend
                        Forecast in 2024
                    </h1>
                </div>
            </div>
        </main>
    );
};

export default BlogDetailView;
