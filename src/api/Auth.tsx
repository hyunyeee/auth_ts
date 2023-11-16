import useSWR from 'swr';

export interface User {
  email: string;
  password: string;
  username: string;
}

const BASE_URL = process.env.REACT_APP_BASE_URL;
const fetcher = (url: string) =>
  fetch(BASE_URL + url).then((res) => res.json());

export function useUser(url: string): {
  isLoading: boolean;
  isError: boolean;
  data: User[] | undefined;
} {
  const { data, error } = useSWR<{ data: { users: User[] } }>(url, fetcher);

  return {
    data: data?.data?.users,
    isLoading: !error && !data,
    isError: !!error,
  };
}
