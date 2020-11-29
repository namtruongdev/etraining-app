import Head from 'next/head';

import React, { useEffect, useState, memo } from 'react';
import { Layout } from 'antd';

import Header from './Header';
import Footer from './Footer';

const { Content } = Layout;

const LayoutWrapper = ({ children, title }) => {
  const [bgHeader, setBgHeader] = useState('rgba(0, 21, 41, 0.3)');

  useEffect(() => {
    const changeBgHeader = () => {
      if (window.scrollY >= 500) setBgHeader('rgba(0, 21, 41, 1)');
      else setBgHeader('rgba(0, 21, 41, 0.3)');
    };
    window.addEventListener('scroll', changeBgHeader);
    return () => window.removeEventListener('scroll', changeBgHeader);
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <Header bgHeader={bgHeader} />
        <Content>{children}</Content>
        <Footer />
      </Layout>
    </>
  );
};

export default memo(LayoutWrapper);
