import useSWR from 'swr';
import { User } from '../interfaces/User';
import { fetcher } from '../api/auth';

export function useUser(url: string): {
  data: User[] | undefined;
  isLoading: boolean;
  isError: boolean;
} {
  const { data, error } = useSWR<{ data: { users: User[] } }>(url, fetcher);

  return {
    data: data?.data?.users,
    isLoading: !error && !data,
    isError: !!error,
  };
}