import LoveIcon from "@/assets/icons/LoveIcon";
import ShareIcon from "@/assets/icons/ShareIcon";
import VolumeIcon from "@/assets/icons/VolumeIcon";
import NameCard from "@/components/cards/NameCard";
import BookmarkIcon from "@/assets/icons/BookmarkIcon";
import UserDashboardNav from "@/components/navs/UserDashboardNav";

const DashboardView = () => {
    return (
        <main className="bg-white pt-6 md:pt-[26px] pb-[60px] md:pb-[60px]">
            <div className="container mx-auto px-[6px]">
                <UserDashboardNav />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <NameCard />
                    <NameCard />
                    <NameCard />
                    <NameCard />
                    <NameCard />
                </div>
            </div>
        </main>
    );
};

export default DashboardView;
