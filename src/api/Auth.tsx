import useSWR from 'swr';

export interface User {
  email: string;
  password: string;
  username: string;
}

const BASE_URL = process.env.REACT_APP_BASE_URL;
const fetcher = async (url: string) => {
  const response = await fetch(BASE_URL + url);
  const data = await response.json();
  return data;
};

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

export const postFetcher = async (
  url: string,
  data: { password: string; email: string; username?: string }
) => {
  const response = await fetch(BASE_URL + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  return await response.json();
};
