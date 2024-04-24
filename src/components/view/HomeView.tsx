"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "../buttons/Button";
import InputField from "../form/InputField";
import PlanButton from "../buttons/PlanButton";
import GoogleSignupBtn from "../buttons/GoogleSignupBtn";

const HomeView = () => {
    const [formState, setFormState] = useState({
        name: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <div className="flex items-center justify-center h-screen overflow-auto">
            <div className="w-full max-w-[370px] h-[622px] mx-auto">
                {/* logo */}
                <div className="mb-8">
                    <Link
                        href="/"
                        className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start"
                    >
                        <Image
                            className="h-16 w-44 relative object-cover mx-auto"
                            alt="Noble Names Logo"
                            src="/images/logo.png"
                            width={176}
                            height={64}
                        />
                    </Link>
                </div>

                {/* Title */}
                <div>
                    <h1 className="heading-text text-center">
                        Log in to your account
                    </h1>
                    <p className="pt-4 text-center text-text-tertiary">
                        Welcome back! Please enter your details.
                    </p>
                </div>

                {/* Signup Form */}
                <div className="my-8 ">
                    <form>
                        <div className="mb-5">
                            <InputField
                                type="text"
                                label="Name*"
                                name="name"
                                placeholder="Enter your name"
                                onChange={handleChange}
                                value={formState.name}
                            />
                        </div>

                        <div className="mb-5">
                            <InputField
                                type="password"
                                label="Password*"
                                name="password"
                                placeholder="Enter your password"
                                onChange={handleChange}
                                value={formState.name}
                            />
                        </div>

                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="w-4 h-4 border border-border-primary"
                                />
                                <label
                                    htmlFor="remember"
                                    className="text-sm text-text-secondary font-medium"
                                >
                                    Remember for 30 days
                                </label>
                            </div>

                            <PlanButton>Forgot password</PlanButton>
                        </div>

                        <div>
                            <Button>Get started</Button>
                        </div>

                        <div className="mt-4">
                            <GoogleSignupBtn text="Sign in with Google" />
                        </div>
                    </form>
                </div>

                {/* signin link */}
                <div className="flex items-center justify-center gap-1 mb-5">
                    <p className="text-text-tertiary">Don’t have an account?</p>
                    <Link href="/sign-up">
                        <PlanButton>Sign Up</PlanButton>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomeView;
