import {
  QueryFunction,
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
  UseQueryOptions,
} from '@tanstack/react-query';

export const useApiGet = <TData, TError>(
  key: string[], // Change QueryKey to string[]
  fn: QueryFunction<TData>,
  options?: UseQueryOptions<TData, TError>
) =>
  useQuery<TData, TError>({
    queryKey: key,
    queryFn: fn,
    ...options,
  });

export const useApiSend = <TData, TError, TVariables>(
  fn: (variables: TVariables) => Promise<TData>,
  success?: (data: TData) => void,
  error?: (err: TError) => void,
  invalidateKey?: string[], // Change QueryKey[] to string[]
  options?: UseMutationOptions<TData, TError, TVariables>
) => {
  const queryClient = useQueryClient();

  return useMutation<TData, TError, TVariables>({
    mutationFn: fn,
    onSuccess: (data) => {
      invalidateKey &&
        invalidateKey.forEach((key: any) => {
          queryClient.invalidateQueries(key);
        });
      success && success(data);
    },
    onError: error,
    retry: 2,
    ...options,
  });
};
