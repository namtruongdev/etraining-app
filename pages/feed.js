import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect, memo } from 'react';
import { Layout } from 'antd';

import LayoutDashboard from '../components/LayoutDashboard';
import { useValidated } from '../hooks';

const Friend = dynamic(() => import('../components/Feed/Friend'));
const CreatePost = dynamic(() => import('../components/Feed/CreatePost'));

const { Content } = Layout;

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
    <LayoutDashboard title="Bảng tin | ETraining">
      <Content style={{ paddingLeft: 200, paddingRight: 200, color: '#fff' }}>
        <div
          style={{
            padding: '79px 15px 15px 15px',
            backgroundColor: '#141414',
            borderLeft: '1px solid #303030',
            borderRight: '1px solid #303030',
            minHeight: '100vh',
          }}
        >
          <CreatePost />
        </div>
      </Content>
      <Friend />
    </LayoutDashboard>
  );
};

export default memo(Dashboard);
