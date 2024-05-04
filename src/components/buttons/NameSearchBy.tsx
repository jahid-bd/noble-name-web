'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Dispatch, SetStateAction } from 'react';

interface LinkType {
  path: string;
  title: string;
}

const SearchButton = ({ path, title }: LinkType) => {
  const activePath = usePathname();

  return (
    <button
      type="button"
      className={`text-center px-3 py-2 rounded-md text-xs md:text-lg font-medium ${
        activePath === path ? 'bg-primary text-white' : 'text-text-black'
      }`}
    >
      {title}
    </button>
  );
};

interface TabTypes {
  title: string;
  name: string;
  onClick: () => void;
  value: string;
  isActive?: boolean;
}

const TabButton = ({ title, name, value, onClick, isActive }: TabTypes) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  //   const createQueryString = useCallback(
  //     (name: string, value: string) => {
  //       const params = new URLSearchParams(searchParams.toString());
  //       params.set(name, value);

  //       return params.toString();
  //     },
  //     [searchParams]
  //   );

  //   const onClick = () => {
  //     router.push(pathname + '?' + createQueryString(name, value));
  //   };

  return (
    <button
      type="button"
      className={`text-center px-3 py-2 rounded-md text-xs md:text-lg font-medium ${
        isActive ? 'bg-primary text-white' : 'text-text-black'
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

interface SearchByTypes {
  searchBy: string;
  setSearchBy: Dispatch<SetStateAction<string>>;
}

const NameSearchBy = ({ searchBy, setSearchBy }: SearchByTypes) => {
  return (
    <div className="grid grid-cols-3 bg-teal rounded-md mb-2.5 md:mb-6">
      <TabButton
        title="Search by Name"
        name="search_by"
        value="name"
        onClick={() => setSearchBy('name')}
        isActive={searchBy === 'name'}
      />
      <TabButton
        onClick={() => setSearchBy('meanings')}
        title="Search by Meaning"
        name="search_by"
        value="meanings"
        isActive={searchBy === 'meanings'}
      />
      <TabButton
        onClick={() => setSearchBy('fullname')}
        title="Search Full Name"
        name="search_by"
        value="fullname"
        isActive={searchBy === 'fullname'}
      />
    </div>
  );
};

export default NameSearchBy;
