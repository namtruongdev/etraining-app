import Link from 'next/link';
import Image from 'next/image';
import { getData } from '../utils/getData';
import { Layout, Menu, Button, Avatar, Carousel, Typography } from 'antd';
import css from 'styled-jsx/css';

const { Title, Paragraph } = Typography;

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
            <Link href="/login">
              <Button type="link" shape="round" size="middle" danger>
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
          <div className="slide__image">
            <Image
              src="/images/slide-4.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              draggable="false"
            />
          </div>
        </Carousel>
        <section className="slogan">
          <div>
            <Title level={1} style={{ color: '#40A9FF' }}>
              Redefine yourself
            </Title>
            <Title level={2} style={{ color: 'rgba(0, 0, 0, 0.5)' }}>
              Học tiếng Anh theo cách của bạn
            </Title>
            <Button type="primary" size="large" style={{ margin: '30px 0' }}>
              Bắt đầu học
            </Button>
          </div>
        </section>
        <section className="divider">
          <img src="/images/divider.png" />
        </section>
        <section className="why">
          <div className="title">
            <Title level={2}>Tại sao bạn nên học tại ETraining?</Title>
            <Paragraph style={{ color: 'rgba(0, 0,0, 0.5)' }}>
              ETraining được xây dựng để giúp bạn hệ thống lại toàn bộ từ vựng
              tiếng Anh mà bạn đã học qua flashcard và nhắc nhở bạn học một từ
              nào đó nhiều lần nếu bạn hay quên nó.
            </Paragraph>
          </div>
          <div></div>
        </section>
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
          .slogan {
            padding: 4rem 1.5rem 1.5rem 1.5rem;
            display: flex;
            justify-content: center;
            background: #fff;
          }

          .slogan div {
            text-align: center;
          }
          .divider {
            background: #fff;
            padding-bottom: 30px;
          }

          .divider img {
            height: 60px;
            margin: 0 auto;
            display: block;
          }
          .why {
            padding: 15px;
            display: flex;
            justify-content: center;
          }

          .title {
            text-align: center;
            max-width: 1140px;
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
