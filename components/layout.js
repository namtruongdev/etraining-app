import Head from 'next/head';
import dynamic from 'next/dynamic';
import React, { useEffect, useState, memo } from 'react';
import { Layout } from 'antd';

const Header = dynamic(() => import('./Header'));
const Footer = dynamic(() => import('./Footer'));

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
