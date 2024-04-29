"use client";

import Link from "next/link";
import Image from "next/image";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="max-w-[1600px] mx-auto md:hidden">
                <header className="bg-white py-4 px-[6px]">
                    <div className="w-full flex justify-between items-center mx-auto">
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

                        <div className="p-2">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="menu-02">
                                    <path
                                        id="Icon"
                                        d="M3 12H15M3 6H21M3 18H21"
                                        stroke="#344054"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>
                </header>

                {children}
            </div>

            <div className="max-w-[1600px] mx-auto hidden md:flex gap-4">
                <aside className="w-[310px] h-screen flex flex-col justify-between">
                    <div>
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

                        <div>
                            <Link href="/">Dashboard</Link>
                            <Link href="/">Name</Link>
                            <Link href="/">Name Request</Link>
                            <Link href="/">Blog</Link>
                        </div>
                    </div>

                    <div>
                        <Link href="/">Support Request</Link>
                        <Link href="/">Setting</Link>
                    </div>
                </aside>

                <div className="w-[1200px]">{children}</div>
            </div>
        </>
    );
};

export default AdminLayout;
