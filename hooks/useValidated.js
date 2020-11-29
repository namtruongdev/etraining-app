import useSWR from 'swr';
import cookie from 'js-cookie';

export const useValidated = () => {
  const authCookie = cookie.get('auth');
  const validator = async (url) => {
    const res = await fetch(url, {
      headers: {
        cookie: authCookie,
      },
    });
    return await res.json();
  };

  const { data, mutate } = useSWR(`/api/auth`, validator);
  const loading = !data;
  const loggedOut = data && data.code === 403;
  const loggedIn = data && data.code === 200;

  return {
    loading,
    loggedOut,
    loggedIn,
    data,
    mutate,
  };
};
