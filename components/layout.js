import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Layout, Menu, Button, Avatar, Select, Typography } from 'antd';
import {
  ThunderboltOutlined,
  FormOutlined,
  ReadOutlined,
  MenuOutlined,
  BellOutlined,
  TwitterOutlined,
  GithubOutlined,
  FacebookOutlined,
  HeartFilled,
  DingdingOutlined,
} from '@ant-design/icons';
import css from 'styled-jsx/css';

import style from '../styles/index.module.css';

const { Header, Footer, Content } = Layout;
const { SubMenu } = Menu;
const { Option } = Select;
const { Title } = Typography;

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
  const [bgHeader, setBgHeader] = useState('rgba(0, 21, 41, 0.3)');
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 500) setBgHeader('rgba(0, 21, 41, 1)');
      else setBgHeader('rgba(0, 21, 41, 0.3)');
      return () => window.removeEventListener('scroll');
    });
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Layout>
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
                className={`${className} ${style.menu}`}
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
          </div>
        </Header>
        <Content>{children}</Content>
        <Footer
          style={{
            background: '#10182F',
            color: '#A2AED2',
            padding: '24px 15px',
            clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 100%)',
          }}
        >
          <div className="container">
            <section className="logo">
              <Title
                level={3}
                style={{ color: '#a2aed2', textAlign: 'center' }}
              >
                <DingdingOutlined />
                ETraining
              </Title>
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
              <div id="language">
                <Select
                  defaultValue="vietnamese"
                  style={{ width: 120, color: '#a2aed2' }}
                >
                  <Option value="vietnamese">Tiếng Việt</Option>
                  <Option value="english">English</Option>
                  <Option value="japanese">日本人</Option>
                </Select>
              </div>
              <div id="social">
                <a>
                  <TwitterOutlined style={{ fontSize: '2rem' }} />
                </a>
                <a>
                  <GithubOutlined style={{ fontSize: '2rem' }} />
                </a>
                <a>
                  <FacebookOutlined style={{ fontSize: '2rem' }} />
                </a>
              </div>
              <div id="copyright">
                &copy; {new Date().getFullYear()} ETraining. Made with{' '}
                <HeartFilled style={{ color: 'red' }} /> by{' '}
                <a
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://fb.com/truongduongg99"
                  style={{ color: '#fff' }}
                >
                  Nam Trường
                </a>
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

            .nav-footer a {
              color: #a2aed2;
              padding: 7px 15px;
              display: inline-block;
            }

            .nav-footer a:hover {
              color: #fff;
              transition: all 0.3s ease;
            }
            .container {
              max-width: 1140px;
              margin: 0 auto;
            }

            .copyright {
              display: flex;
              padding: 15px 0;
              flex-flow: wrap;
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

            #social a {
              color: #a2aed2;
              padding: 0.7rem 1.5rem;
              display: inline-block;
            }

            #social a:hover {
              color: #fff;
              transition: all 0.3s ease;
            }
            .nav-footer {
              display: flex;
              justify-content: center;
              padding: 15px 0;
            }

            div
              :global(.ant-select:not(.ant-select-customize-input)
                .ant-select-selector) {
              background-color: #10182f;
              border: none;
            }

            div :global(.ant-select-arrow) {
              color: #a2aed2;
            }

            @media (max-width: 768px) {
              .learn-now {
                display: none;
              }
            }

            @media (max-width: 992px) {
              .copyright {
              }
              #copyright {
                flex: 0 0 100%;
                text-align: center;
                padding-top: 20px;
              }

              #social {
                text-align: right;
              }
            }
          `}
        </style>
      </Layout>
    </>
  );
};

export default LayoutWrapper;
