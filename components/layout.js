import Head from 'next/head';
import React from 'react';

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <div>{children}</div>
  </>
);

export default Layout;
