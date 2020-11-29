import { useRouter } from 'next/router';
import React, { useEffect, memo } from 'react';
import Layout from '../components/layout';

import { useValidated } from '../hooks';

const Dashboard = () => {
  const router = useRouter();
  const { loggedOut } = useValidated();

  useEffect(() => {
    if (loggedOut) {
      router.replace('/login');
    }
  }, [loggedOut]);

  useEffect(() => {
    router.prefetch('/login');
  });

  return (
    <Layout title="Bảng điều khiển | ETraining">
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

export default memo(Dashboard);
