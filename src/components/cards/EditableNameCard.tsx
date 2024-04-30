"use client";

import { useState } from "react";
import LoveIcon from "@/assets/icons/LoveIcon";
import ShareIcon from "@/assets/icons/ShareIcon";
import VolumeIcon from "@/assets/icons/VolumeIcon";
import BookmarkIcon from "@/assets/icons/BookmarkIcon";

const EditableNameCard = () => {
    const [isHover, setIsHover] = useState(false);

    return (
        <div
            className="p-5 rounded-xl bg-blue flex flex-col gap-4 relative overflow-hidden"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <p className="text-white text-base font-bold">Amanullha</p>
                    <VolumeIcon />
                </div>

                <p className="text-white text-base font-bold">حمزہ</p>
            </div>

            <p className="mb-10 text-white text-xs font-normal">
                Lion; Strong, steadfast
            </p>

            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <p className="px-2 py-0.5 bg-dark-blue rounded-full text-white text-xs font-medium">
                        Muslim name
                    </p>
                    <p className="px-2 py-0.5 bg-dark-blue rounded-full text-white text-xs font-medium">
                        Popular Name
                    </p>
                </div>

                {/* <div className="flex gap-3 items-center">
                    <button type="button">
                        <LoveIcon />
                    </button>

                    <button type="button">
                        <BookmarkIcon />
                    </button>

                    <button type="button">
                        <ShareIcon />
                    </button>
                </div> */}
            </div>

            <div
                className={`absolute top-0 left-0 right-0 bottom-0 bg-white opacity-80 cursor-pointer ${
                    isHover ? "block" : "hidden"
                }`}
            >
                <div className="flex items-center gap-3 w-full h-full justify-center">
                    <button type="button" className="">
                        Edit
                    </button>
                    <button type="button">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default EditableNameCard;
