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

export const postForm = async (
  url: string,
  data: { password: string; email: string; username: string }
) => {
  const response = await fetch(BASE_URL + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    throw new Error('데이터 fetching 중 에러 발생');
  }
  return await response.json();
};