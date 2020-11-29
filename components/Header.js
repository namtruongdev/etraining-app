import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useMemo, useCallback, memo, useEffect, useState } from 'react';

import { Layout, Button, Dropdown, Menu, Avatar, Typography } from 'antd';
import css from 'styled-jsx/css';

import {
  ThunderboltOutlined,
  FormOutlined,
  ReadOutlined,
  MenuOutlined,
  BellOutlined,
  UserOutlined,
  LogoutOutlined,
  DingdingOutlined,
} from '@ant-design/icons';

import { useIsMounted, useValidated } from '../hooks';

const { Header } = Layout;
const { SubMenu } = Menu;
const { Title, Text } = Typography;

const { className, styles } = css.resolve`
  .ant-menu-dark.ant-menu-horizontal {
    background: transparent;
  }

  .ant-menu.ant-menu-dark {
    color: #fff;
    max-width: 490px;
    width: 100%;
  }
`;

const HeaderPrimary = ({ bgHeader }) => {
  const router = useRouter();
  const { mutate, data, loggedOut } = useValidated();
  const [name, setName] = useState(null);
  const [username, setUsername] = useState(null);
  const _isMounted = useIsMounted();

  useEffect(() => {
    console.log(loggedOut);
    if (data) {
      setName(data?.name);
      setUsername(data?.username);
    }
  }, [data]);

  useEffect(() => {
    router.prefetch(`/${username}`);
    router.prefetch('/');
  }, []);

  const handleMenuClick = useCallback(async (e) => {
    if (e.key === 'signout') {
      const res = await fetch('/api/signout');

      if (res.ok) {
        mutate('/');
        router.replace('/');
      }
    }
  }, []);

  const menu = useMemo(
    () => (
      <Menu theme="dark" onClick={handleMenuClick}>
        <Menu.Item key="profile">
          <Link href={`/${username}`}>
            <div
              style={{ display: 'flex', alignItems: 'center' }}
              className="profile"
            >
              <Avatar
                style={{ marginRight: '15px' }}
                size={60}
                src="https://i.pravatar.cc/300"
              />
              <div>
                <Title
                  level={4}
                  style={{
                    color: 'rgba(255, 255, 255, 0.65)',
                    marginBottom: '5px',
                  }}
                >
                  {name}
                </Title>
                <Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
                  Xem trang cá nhân của bạn
                </Text>
              </div>
            </div>
          </Link>
        </Menu.Item>
        <Menu.Divider
          style={{
            backgroundColor: 'rgba(255,255,255,0.45)',
            margin: '4px 12px',
          }}
        />
        <Menu.Item key="feed" icon={<UserOutlined />}>
          <Link href="/dashboard">Bảng tin</Link>
        </Menu.Item>
        <Menu.Item key="signout" icon={<LogoutOutlined />}>
          Đăng xuất
        </Menu.Item>
      </Menu>
    ),
    [name, username]
  );

  return (
    <Header
      style={{
        position: 'fixed',
        zIndex: 111,
        width: '100%',
        padding: '0 15px 0 0',
        display: 'flex',
        justifyContent: 'center',
        background: bgHeader,
        transition: 'all 2s ease',
      }}
    >
      <div className="wrapper__nav">
        <nav className="nav">
          <Menu
            mode="horizontal"
            selectedKeys={['home']}
            theme="dark"
            overflowedIndicator={<MenuOutlined />}
            className={`${className} `}
          >
            <Menu.Item
              key="home"
              icon={<DingdingOutlined />}
              style={{ backgroundColor: 'transparent' }}
            >
              <Link href="/">ETraining</Link>
            </Menu.Item>
            <SubMenu
              key="skills"
              icon={<ThunderboltOutlined />}
              title="Kỹ năng"
            >
              <Menu.Item key="setting:1">Nghe</Menu.Item>
              <Menu.Item key="setting:2">Nói</Menu.Item>
              <Menu.Item key="setting:3">Đọc</Menu.Item>
              <Menu.Item key="setting:4">Viết</Menu.Item>
            </SubMenu>
            <SubMenu key="grammar" icon={<FormOutlined />} title="Ngữ pháp">
              <Menu.Item key="setting:5">Dễ</Menu.Item>
              <Menu.Item key="setting:6">Khó</Menu.Item>
            </SubMenu>
            <SubMenu key="vocab" icon={<ReadOutlined />} title="Từ vựng">
              <Menu.Item key="setting:7">Dễ</Menu.Item>
              <Menu.Item key="setting:8">Khó</Menu.Item>
            </SubMenu>
          </Menu>
          <div className="learn-now">
            <Button type="primary" shape="round" size="middle">
              Học ngay
            </Button>
          </div>
        </nav>
        <div className="user__info">
          <BellOutlined
            style={{
              fontSize: '20px',
              color: 'rgba(255, 255, 255, 1)',
              cursor: 'pointer',
            }}
          />
          {name ? (
            <Dropdown
              overlay={menu}
              placement="bottomRight"
              trigger="click"
              overlayStyle={{ position: 'fixed' }}
            >
              <Avatar
                style={{
                  background: 'url(https://i.pravatar.cc/300)',
                  backgroundSize: 'cover',
                  verticalAlign: 'middle',
                  cursor: 'pointer',
                  marginLeft: '15px',
                }}
                size="large"
                gap={1}
              />
            </Dropdown>
          ) : (
            <Link href="/login" passHref>
              <a
                style={{
                  color: '#fff',
                  lineHeight: '1.5715',
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                  marginLeft: '15px',
                  cursor: 'pointer',
                }}
              >
                Đăng nhập
              </a>
            </Link>
          )}
        </div>
      </div>
      {styles}
      <style jsx>
        {`
          .nav {
            display: flex;
            align-items: center;
            width: 100%;
          }

          .wrapper__nav {
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            max-width: 1140px;
          }
          .user__info {
            display: flex;
            align-items: center;
          }
          @media (max-width: 768px) {
            .learn-now {
              display: none;
            }
          }
        `}
      </style>
    </Header>
  );
};

export default memo(HeaderPrimary);
