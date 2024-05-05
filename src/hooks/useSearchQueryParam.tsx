import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

const useSearchQueryParam = () => {
  const searchParams = useSearchParams();

  const deleteParams = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());

      params.delete(key, value);

      return params.toString();
    },
    [searchParams],
  );

  return {
    deleteParams,
  };
};

export default useSearchQueryParam;
