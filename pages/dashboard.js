import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { getData } from '../utils/getData';
import LayoutLetter from '../components/layoutLetter';
import { notification } from 'antd';
import Layout from '../components/layout';

const Dashboard = ({ code, messange, name }) => {
  console.log('dashboard render lai');
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/');
    if (code === 401) {
      router.replace('/login');
      notification['error']({
        message: messange,
      });
    }
  }, []);

  return (
    <Layout name={name}>
      <div>
        <h1>Không có gì đâu mà vào.</h1>
        <h1>Không có gì đâu mà vào.</h1>
        <h1>Không có gì đâu mà vào.</h1>
        <h1>Không có gì đâu mà vào.</h1>
        <h1>Không có gì đâu mà vào.</h1>
        <h1>Không có gì đâu mà vào.</h1>
        <h1>Không có gì đâu mà vào.</h1>
        <h1>Không có gì đâu mà vào.</h1>
        <h1>Không có gì đâu mà vào.</h1>
        <h1>Không có gì đâu mà vào.</h1>
        <h1>Không có gì đâu mà vào.</h1>
        <h1>Không có gì đâu mà vào.</h1>
        <h1>Không có gì đâu mà vào.</h1>
        <h1>Không có gì đâu mà vào.</h1>
        <h1>Không có gì đâu mà vào.</h1>
        <h1>Không có gì đâu mà vào.</h1>
      </div>
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  const data = await getData(`${process.env.URL}api/auth`, ctx);
  return {
    props: data,
  };
};

export default Dashboard;
