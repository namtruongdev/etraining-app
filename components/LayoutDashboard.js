import Head from 'next/head';
import dynamic from 'next/dynamic';
import React, { memo } from 'react';
import { Layout } from 'antd';

const Header = dynamic(() => import('./Header'));
const Sider = dynamic(() => import('./Sider'));

const LayoutWrapper = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <Header
          bgHeader={'#141414'}
          box={'0px 13px 16px 0px rgba(0,0,0,0.29)'}
        />
        <Layout>
          <Sider />
          {children}
        </Layout>
      </Layout>
    </>
  );
};

export default memo(LayoutWrapper);
