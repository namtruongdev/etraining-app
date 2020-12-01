import React, { useMemo, memo } from 'react';
import { Menu, Layout, Typography, List, Avatar, Badge } from 'antd';

const { Sider } = Layout;
const { Title } = Typography;

const Friend = () => {
  const data = useMemo(
    () => [
      {
        title: 'Dương Nam Trường',
      },
      {
        title: 'Trần Phạm Huy Hoàng',
      },
      {
        title: 'Lê Công Phương Nam',
      },
      {
        title: 'Hoàng Thanh Tùng',
      },
    ],
    []
  );
  return (
    <Sider
      style={{
        overflow: 'auto',
        minHeight: '100vh',
        position: 'fixed',
        right: 0,
        zIndex: '11',
        paddingTop: '79px',
        background: '#141414',
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        style={{ padding: 15, background: '#141414' }}
      >
        <div>
          <Title level={4} style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
            Bạn bè
          </Title>
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item
                style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.15)' }}
              >
                <List.Item.Meta
                  avatar={
                    <Badge dot color={['green']} offset={[-5, 30]}>
                      <Avatar src="https://i.pravatar.cc/150" />
                    </Badge>
                  }
                  title={
                    <a style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                      {item.title}
                    </a>
                  }
                />
              </List.Item>
            )}
          />
        </div>
      </Menu>
    </Sider>
  );
};

export default memo(Friend);
