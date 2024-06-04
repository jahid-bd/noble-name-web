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
    label: 'Select a Gender',
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
    value: '',
    label: 'Select a Language',
  },
  {
    value: 'english',
    label: 'English',
  },
  {
    value: 'arabic',
    label: 'عربي',
  },
];

type SearchBy = 'name' | 'meanings' | 'fullname';

const NameSearchSection = () => {
  const router = useRouter();
  const [searchError, setSearchError] = useState({
    name: false,
    language: false,
    gender: false,
  });
  const searchParams = useSearchParams();
  const [searchBy, setSearchBy] = useState<SearchBy>('name');
  const [searchValue, setSearchValue] = useState('');
  const { setQueryParams, deleteParams } = useSearchQueryParam();
  const [optionsState, setOptionsState] = useState({
    gender: genderOptions[0],
    language: languageOptions[0],
  });

  const labelPlaceholder: Record<
    SearchBy,
    { label: string; placeholder: string }
  > = {
    name: {
      label: 'Name',
      placeholder: 'Enter a Baby Name',
    },
    meanings: {
      label: 'Meaning',
      placeholder: 'Enter a Baby Name Meaning',
    },
    fullname: {
      label: 'Full Name',
      placeholder: 'Enter a full Baby Name - Example Mohammed Ibrahim Ali',
    },
  };

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

  const handleSetSearchBy = (value: SearchBy) => {
    setSearchValue('');
    setOptionsState({
      gender: genderOptions[0],
      language: languageOptions[0],
    });
    setSearchError({
      name: false,
      language: false,
      gender: false,
    });

    setSearchBy(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const onSearch = () => {
    setSearchError({ name: false, language: false, gender: false });

    if (!searchValue || searchValue?.length < 2) {
      setSearchError((prev) => ({ ...prev, name: true }));
    }
    if (!optionsState?.gender?.value) {
      setSearchError((prev) => ({ ...prev, gender: true }));
    }
    if (!optionsState.language?.value && searchBy !== 'meanings') {
      setSearchError((prev) => ({ ...prev, language: true }));
    }

    if (
      (!searchValue && searchValue?.length < 2) ||
      !optionsState?.gender?.value ||
      (!optionsState.language?.value && searchBy !== 'meanings')
    ) {
      return 0;
    }

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
    search_by && setSearchBy(search_by as SearchBy);

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
      <NameSearchBy searchBy={searchBy} setSearchBy={handleSetSearchBy} />

      <div className="flex flex-col md:flex-row gap-2.5">
        <div
          className={`w-full ${
            searchBy === 'meanings' ? 'md:w-3/4' : 'md:w-1/2'
          }`}
        >
          <InputField
            type="text"
            error={searchError?.name}
            label={labelPlaceholder[searchBy]?.label}
            name="name"
            placeholder={labelPlaceholder[searchBy]?.placeholder}
            onChange={handleChange}
            value={searchValue}
            isCustom={true}
          />
        </div>

        {searchBy !== 'meanings' && (
          <div className="w-full md:w-1/4">
            <SelectInput
              label="Language"
              options={languageOptions}
              error={searchError?.language}
              handleSelect={(opt) => handleSelect('language', opt)}
              selectedOption={optionsState.language}
            />
          </div>
        )}

        <div className="w-full md:w-1/4">
          <SelectInput
            label="Gender"
            options={genderOptions}
            error={searchError?.gender}
            handleSelect={(opt) => handleSelect('gender', opt)}
            selectedOption={optionsState.gender}
          />
        </div>

        <div className="flex justify-end md:items-end">
          <button
            type="button"
            onClick={onSearch}
            className="bg-primary px-4 py-2.5 rounded-full max-md:w-full max-md:flex max-md:justify-center mb-1"
          >
            <SearchBtn />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NameSearchSection;
