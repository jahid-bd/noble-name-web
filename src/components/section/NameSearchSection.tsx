'use client';

import SearchBtn from '@/assets/icons/SarchBtn';
import NameSearchBy from '@/components/buttons/NameSearchBy';
import InputField from '@/components/form/InputField';
import SelectInput from '@/components/form/SelectInput';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

const genderOptions = [
  {
    value: '',
    label: 'Select gender',
  },
  {
    value: 'boy',
    label: 'Boy',
  },
  {
    value: 'girl',
    label: 'Girl',
  },
];

const languageOptions = [
  {
    value: 'english',
    label: 'English',
  },
  {
    value: 'arabic',
    label: 'Arabic',
  },
];

const NameSearchSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (paramsObject: object) => {
      const params = new URLSearchParams(searchParams.toString());
      for (const [key, value] of Object.entries(paramsObject)) {
        params.set(key, value);
      }
      return params.toString();
    },
    [searchParams]
  );

  const [optionsState, setOptionsState] = useState({
    gender: genderOptions[0],
    language: languageOptions[0],
  });

  const [searchBy, setSearchBy] = useState('name');

  const handleSelect = (
    key: string,
    option: { value: string; label: string }
  ) => {
    setOptionsState({
      ...optionsState,
      [key]: option,
    });

    // router.push(pathname + '?' + createQueryString(key, option.label));
  };

  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onSearch = () => {
    const queryParams = {
      search: searchValue,
      language: optionsState.language.value,
      gender: optionsState.gender.value,
      search_by: searchBy,
    };

    router.push(pathname + '?' + createQueryString(queryParams));
  };

  useEffect(() => {
    const languageParam = searchParams.get('language');
    console.log(languageParam);
    const genderParam = searchParams.get('gender');

    if (languageParam === 'english') {
      setOptionsState((prev) => ({
        ...prev,
        language: {
          value: 'english',
          label: 'English',
        },
      }));
    }

    if (languageParam === 'arabic') {
      setOptionsState((prev) => ({
        ...prev,
        language: {
          value: 'arabic',
          label: 'Arabic',
        },
      }));
    }

    if (genderParam === 'boy') {
      setOptionsState((prev) => ({
        ...prev,
        gender: {
          value: 'boy',
          label: 'Boy',
        },
      }));
    }

    if (genderParam === 'girl') {
      setOptionsState((prev) => ({
        ...prev,
        gender: {
          value: 'girl',
          label: 'Girl',
        },
      }));
    }

    const search = searchParams.get('search');
    console.log({ search });
    if (search) {
      setSearchValue(search);
    }

    const serachBy = searchParams.get('search_by');
    if (serachBy) {
      setSearchBy(serachBy);
    }
  }, []);

  return (
    <div className="bg-white p-3 md:p-5 rounded-xl border border-border-secondary">
      <NameSearchBy searchBy={searchBy} setSearchBy={setSearchBy} />

      <div className="flex flex-col md:flex-row gap-2.5">
        <div className="w-full md:w-1/2">
          <InputField
            type="text"
            label="Name"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            value={searchValue}
            isCustom={true}
          />
        </div>

        <div className="w-full md:w-1/4">
          <SelectInput
            label="Language"
            options={languageOptions}
            handleSelect={(opt) => handleSelect('language', opt)}
            selectedOption={optionsState.language}
          />
        </div>

        <div className="w-full md:w-1/4">
          <SelectInput
            label="Gender"
            options={genderOptions}
            handleSelect={(opt) => handleSelect('gender', opt)}
            selectedOption={optionsState.gender}
          />
        </div>

        <div className="flex justify-end md:items-end">
          <button
            type="button"
            className="bg-primary px-4 py-2.5 rounded-full"
            onClick={onSearch}
          >
            <SearchBtn />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NameSearchSection;
