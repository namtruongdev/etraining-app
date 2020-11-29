import { useRouter } from 'next/router';
import React, { useEffect, useState, memo } from 'react';
import Layout from '../components/layout';

import { useValidated } from '../hooks';

const Dashboard = () => {
  const router = useRouter();
  const { loggedOut, data } = useValidated();
  const [name, setName] = useState(null);
  const [username, setUsername] = useState(null);
  console.log(loggedOut);
  useEffect(() => {
    if (loggedOut) {
      router.replace('/login');
    }
  }, [loggedOut]);

  useEffect(() => {
    if (data) {
      setName(data?.name);
      setUsername(data?.username);
    }
  }, [data]);

  useEffect(() => {
    router.prefetch('/login');
  });

  return (
    <Layout name={name} username={username} title="Bảng điều khiển | ETraining">
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
