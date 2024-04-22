"use client";

import Link from "next/link";
import Image from "next/image";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <header className="bg-border-tertiary py-4 px-[6px]">
                <div className="container flex justify-between items-center mx-auto">
                    <div className="md:h-16 md:w-44 relative w-[88px] h-8">
                        <Link
                            href="/"
                            className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start"
                        >
                            <Image
                                fill
                                alt="Noble Names Logo"
                                src="/images/logo.png"
                            />
                        </Link>
                    </div>

                    {/* <Link href="/sign-in">Sign In</Link> */}

                    <div>
                        <div className="flex gap-4 items-center bg-white p-2 md:p-3 shadow-menu rounded-full">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M3 12H21M3 6H21M3 18H21"
                                    stroke="#344054"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>

                            <div className="md:h-10 md:w-10 relative w-[30px] h-[30px] rounded-full overflow-hidden">
                                <Image
                                    fill
                                    alt="Noble Names Logo"
                                    src="/images/Avatar.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {children}

            <footer className="py-8 bg-primary">
                <div className="container py-4 px-[6px] mx-auto">
                    <p className="text-center text-white text-base font-semibold mb-5">
                        &copy; 2023 Noble Names
                    </p>

                    <div className="flex flex-col md:flex-row gap-5 items-center justify-center font-normal text-white text-base">
                        <Link href="/fair-use-policy">Terms & Conditions</Link>
                        <Link href="/fair-use-policy">Privacy Policy</Link>
                        <Link href="/fair-use-policy">Fair Use Policy</Link>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default UserLayout;
