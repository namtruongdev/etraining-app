import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { Layout, Menu, Button, Avatar } from 'antd';
import {
  HomeOutlined,
  ThunderboltOutlined,
  FormOutlined,
  ReadOutlined,
  MenuOutlined,
  BellOutlined,
} from '@ant-design/icons';
import css from 'styled-jsx/css';

import style from '../styles/index.module.css';

const { Header, Footer, Content } = Layout;
const { SubMenu } = Menu;

const { className, styles } = css.resolve`
  .ant-menu-dark.ant-menu-horizontal {
    background: transparent;
  }

  .ant-menu-item-active:hover {
    background: red;
  }

  .ant-menu.ant-menu-dark {
    color: #fff;
  }
`;

const LayoutWrapper = ({ children, title, name }) => {
  const handleScroll = (e) => {
    console.log(e.target);
  };

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
        <Header
          style={{
            position: 'fixed',
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            padding: '0 15px',
            justifyContent: 'space-between',
            background: 'rgba(0, 21, 41, 0.3)',
          }}
        >
          <nav className="nav">
            <div className="logo" />
            <Menu
              mode="horizontal"
              selectedKeys={['home']}
              theme="dark"
              overflowedIndicator={<MenuOutlined />}
              className={`${className} ${style.menu}`}
            >
              <Menu.Item
                key="home"
                icon={<HomeOutlined />}
                style={{ backgroundColor: 'transparent' }}
              >
                Trang chủ
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
        </Header>
        <Content>{children}</Content>
        <Footer
          style={{
            background: '#10182F',
            color: '#A2AED2',
            padding: '24px 15px',
          }}
        >
          <div className="container">
            <section className="logo">
              <h1>ETraining</h1>
            </section>
            <section className="nav-footer">
              <div>
                <a>Điều khoản dịch vụ</a>
                <a>Chính sách bảo mật</a>
                <a>Bảo mật</a>
                <a>Sitemap</a>
              </div>
            </section>
            <section className="copyright">
              <div id="language">English</div>
              <div id="social">abc</div>
              <div id="copyright">
                &copy; {new Date().getFullYear()} etraining. Made with &heart;
                by Nam Trường
              </div>
            </section>
          </div>
        </Footer>
        {styles}
        <style jsx>
          {`
            .nav {
              display: flex;
              align-items: center;
              width: 100%;
            }
            .user__info {
              display: flex;
              align-items: center;
            }

            .nav-footer a {
              color: #a2aed2;
              padding: 7px 15px;
            }

            .container {
              max-width: 1140px;
              margin: 0 auto;
            }

            .copyright {
              display: flex;
              padding: 15px 0;
            }

            .copyright div {
              flex: 1;
            }

            #copyright {
              text-align: right;
            }

            #social {
              text-align: center;
            }
            .nav-footer {
              display: flex;
              justify-content: center;
              padding: 15px 0;
            }

            @media (max-width: 768px) {
              .learn-now {
                display: none;
              }
            }
          `}
        </style>
      </Layout>
    </>
  );
};

export default LayoutWrapper;
