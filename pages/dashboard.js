import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { notification } from 'antd';
import { getData } from '../utils/getData';
import LayoutLetter from '../components/layoutLetter';

const Dashboard = ({ code, message }) => {
  const router = useRouter();

  useEffect(() => {
    router.prefetch('/');
    if (code === 401) {
      notification['error']({
        message: message,
      });
      router.replace('/');
    }
  }, []);
  return (
    <LayoutLetter>
      <div>
        <h1>Day la trang admin</h1>
        <h1>Day la trang admin</h1>
        <h1>Day la trang admin</h1>
        <h1>Day la trang admin</h1>
        <h1>Day la trang admin</h1>
        <h1>Day la trang admin</h1>
        <h1>Day la trang admin</h1>
        <h1>Day la trang admin</h1>
        <h1>Day la trang admin</h1>
        <h1>Day la trang admin</h1>
        <h1>Day la trang admin</h1>
        <h1>Day la trang admin</h1>
      </div>
    </LayoutLetter>
  );
};

export const getServerSideProps = async (ctx) => {
  const data = await getData('http://localhost:3000/api/auth/signin', ctx);
  return {
    props: data,
  };
};

export default Dashboard;
