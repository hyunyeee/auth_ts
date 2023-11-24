import useSWR from 'swr';
import { User } from '../interfaces/User';
import { fetcher } from '../api/auth';

export function useUser(url: string): {
  isLoading: boolean;
  isError: boolean;
  data?: User[];
} {
  const { data, error } = useSWR<{ data: { users: User[] } }>(url, fetcher);

  return {
    data: data?.data?.users,
    isLoading: !error && !data,
    isError: error,
  };
}
