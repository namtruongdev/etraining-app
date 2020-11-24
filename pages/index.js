import Link from 'next/link';
import Image from 'next/image';
import { getData } from '../utils/getData';
import { Layout, Menu, Button, Avatar, Carousel } from 'antd';
import css from 'styled-jsx/css';

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
const { Header, Footer, Content } = Layout;
import {
  HomeOutlined,
  ThunderboltOutlined,
  FormOutlined,
  ReadOutlined,
  BellOutlined,
} from '@ant-design/icons';
import style from '../styles/index.module.css';

const { SubMenu } = Menu;

const Home = ({ name }) => {
  return (
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
          <Button type="primary" shape="round" size="middle">
            Học ngay
          </Button>
        </nav>
        <div className="user__info">
          <BellOutlined
            style={{
              fontSize: '25px',

              color: 'rgba(255, 255, 255, 1)',
              cursor: 'pointer',
              marginRight: '15px',
            }}
          />
          {name ? (
            <Avatar
              style={{
                background: 'url(https://i.pravatar.cc/300)',
                backgroundSize: 'cover',
                verticalAlign: 'middle',
                cursor: 'pointer',
              }}
              size="large"
              gap={1}
            />
          ) : (
            <Link href="/login">
              <Button type="primary" shape="round" size="middle" danger>
                Đăng nhập
              </Button>
            </Link>
          )}
        </div>
      </Header>
      <Content>
        <Carousel autoplay>
          <div className="slide__image">
            <Image
              src="/images/slide-1.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              draggable="false"
            />
          </div>
          <div className="slide__image">
            <Image
              src="/images/slide-2.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              draggable="false"
            />
          </div>
          <div className="slide__image">
            <Image
              src="/images/slide-3.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              draggable="false"
            />
          </div>
        </Carousel>
      </Content>
      <Footer></Footer>
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
          .slide__image {
            height: 600px;
            position: relative;
          }
        `}
      </style>
    </Layout>
  );
};

export const getServerSideProps = async (ctx) => {
  const data = await getData(`${process.env.URL}api/auth/signin`, ctx);
  return {
    props: data,
  };
};
export default Home;
