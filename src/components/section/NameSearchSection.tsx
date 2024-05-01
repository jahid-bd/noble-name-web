"use client";

import { useState } from "react";
import SearchBtn from "@/assets/icons/SarchBtn";
import InputField from "@/components/form/InputField";
import SelectInput from "@/components/form/SelectInput";
import NameSearchBy from "@/components/buttons/NameSearchBy";

const genderOptions = [
    {
        value: "boy",
        label: "Boy",
    },
    {
        value: "girl",
        label: "Girl",
    },
];

const languageOptions = [
    {
        value: "english",
        label: "English",
    },
    {
        value: "arabic:",
        label: "Arabic",
    },
];

const NameSearchSection = () => {
    const [optionsState, setOptionsState] = useState({
        gender: genderOptions[0],
        language: languageOptions[0],
    });

    const handleSelect = (
        key: string,
        option: { value: string; label: string },
    ) => {
        setOptionsState({
            ...optionsState,
            [key]: option,
        });
    };

    const handleChange = () => {
        console.log("hello");
    };

    return (
        <div className="bg-white p-3 md:p-5 rounded-xl border border-border-secondary">
            <NameSearchBy />

            <div className="flex flex-col md:flex-row gap-2.5">
                <div className="w-full md:w-1/2">
                    <InputField
                        type="text"
                        label="Name"
                        name="name"
                        placeholder="Enter your name"
                        onChange={handleChange}
                        value=""
                    />
                </div>

                <div className="w-full md:w-1/4">
                    <SelectInput
                        label="Language"
                        options={languageOptions}
                        handleSelect={(opt) => handleSelect("language", opt)}
                        selectedOption={optionsState.language}
                    />
                </div>

                <div className="w-full md:w-1/4">
                    <SelectInput
                        label="Gender"
                        options={genderOptions}
                        handleSelect={(opt) => handleSelect("gender", opt)}
                        selectedOption={optionsState.gender}
                    />
                </div>

                <div className="flex justify-end md:items-end">
                    <button
                        type="button"
                        className="bg-primary px-4 py-2.5 rounded-full"
                    >
                        <SearchBtn />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NameSearchSection;
