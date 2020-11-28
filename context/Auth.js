import React, { createContext } from 'react';
import useSWR from 'swr';
import cookie from 'js-cookie';

const Auth = ({ children }) => {
  const authCookie = cookie.get('auth');
  const validator = async (url) => {
    const res = await fetch(url, {
      headers: {
        cookie: authCookie,
      },
    });

    return res.json();
  };

  const { data } = useSWR('api/auth', validator);

  return (
    <AuthContext.Provider value={{ ...data }}>{children}</AuthContext.Provider>
  );
};

export const AuthContext = createContext();

export default Auth;
