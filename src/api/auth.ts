const BASE_URL = process.env.REACT_APP_BASE_URL;

export const fetcher = async (url: string) => {
  const response = await fetch(BASE_URL + url);
  const data = await response.json();
  return data;
};

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
