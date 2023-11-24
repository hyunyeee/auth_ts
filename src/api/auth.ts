const BASE_URL = process.env.REACT_APP_BASE_URL;

const checkBaseUrl = () => {
  if (!BASE_URL) {
    throw new Error('REACT_APP_BASE_URL이 존재하지 않습니다.');
  }
};

export const fetcher = async (url: string) => {
  checkBaseUrl();
  const response = await fetch(BASE_URL + url);
  return await response.json();
};

export const postFetcher = async (url: string, { arg }: { arg: any }) => {
  checkBaseUrl();
  const response = await fetch(BASE_URL + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(arg),
  });

  return await response.json();
};
