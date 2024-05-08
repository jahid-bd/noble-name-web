'use client';

import SearchBtn from '@/assets/icons/SarchBtn';
import NameSearchBy from '@/components/buttons/NameSearchBy';
import InputField from '@/components/form/InputField';
import SelectInput from '@/components/form/SelectInput';
import useSearchQueryParam from '@/hooks/useSearchQueryParam';
import { getUserProfile } from '@/services/api';
import { useQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

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
  const searchParams = useSearchParams();
  const [searchBy, setSearchBy] = useState('name');
  const [searchValue, setSearchValue] = useState('');
  const { setQueryParams, deleteParams } = useSearchQueryParam();
  const [optionsState, setOptionsState] = useState({
    gender: genderOptions[0],
    language: languageOptions[0],
  });

  const { data } = useQuery({
    queryKey: ['profile'],
    queryFn: getUserProfile,
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onSearch = () => {
    let url: any = searchParams.toString();

    url = searchValue
      ? setQueryParams(url, 'search', searchValue)
      : deleteParams(url, 'search');
    url = optionsState.language.value
      ? setQueryParams(url, 'language', optionsState.language.value)
      : deleteParams(url, 'language');
    url = optionsState.gender.value
      ? setQueryParams(url, 'gender', optionsState.gender.value)
      : deleteParams(url, 'gender');
    url = searchValue
      ? setQueryParams(url, 'search_by', searchBy)
      : deleteParams(url, 'search_by');

    if (data) {
      router.push(`/name-search${url ? `?${url}` : ''}`);
    } else {
      toast.error('Please login before search');
    }
  };

  useEffect(() => {
    const search = searchParams.get('search');
    const gender = searchParams.get('gender');
    const language = searchParams.get('language');
    const search_by = searchParams.get('search_by');

    search && setSearchValue(search);
    search_by && setSearchBy(search_by);

    if (gender) {
      const find = genderOptions.find((item) => item.value === gender);

      find && setOptionsState((prev) => ({ ...prev, gender: find }));
    }

    if (language) {
      const find = languageOptions.find((item) => item.value === language);

      find && setOptionsState((prev) => ({ ...prev, language: find }));
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
