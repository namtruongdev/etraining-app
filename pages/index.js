import Link from 'next/link';
import Image from 'next/image';
import { getData } from '../utils/getData';
import { Layout, Menu, Button, Avatar, Carousel } from 'antd';
const { Header, Footer, Content } = Layout;
import {
  HomeOutlined,
  ThunderboltOutlined,
  FormOutlined,
  ReadOutlined,
  BellOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

const Home = ({ name }) => {
  const contentStyle = {
    height: '570px',
    color: '#fff',
    lineHeight: '570px',
    textAlign: 'center',
    background: '#364d79',
  };

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
        }}
      >
        <nav className="nav">
          <div className="logo" />
          <Menu mode="horizontal" defaultSelectedKeys="home" theme="dark">
            <Menu.Item key="home" icon={<HomeOutlined />}>
              Trang chủ
            </Menu.Item>
            <SubMenu
              key="skills"
              icon={<ThunderboltOutlined />}
              title="Kỹ năng"
            >
              <Menu.Item key="1">Nghe</Menu.Item>
              <Menu.Item key="2">Nói</Menu.Item>
              <Menu.Item key="3">Đọc</Menu.Item>
              <Menu.Item key="4">Viết</Menu.Item>
            </SubMenu>
            <SubMenu key="grammar" icon={<FormOutlined />} title="Ngữ pháp">
              <Menu.Item key="5">Dễ</Menu.Item>
              <Menu.Item key="6">Khó</Menu.Item>
            </SubMenu>
            <SubMenu key="vocab" icon={<ReadOutlined />} title="Từ vựng">
              <Menu.Item key="7">Dễ</Menu.Item>
              <Menu.Item key="8">Khó</Menu.Item>
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
              color: 'rgba(255, 255, 255, 0.65)',
              cursor: 'pointer',
              marginRight: '15px',
            }}
          />
          <Avatar
            style={{
              backgroundColor: '#f56a00',
              verticalAlign: 'middle',
              cursor: 'pointer',
            }}
            size="large"
            gap={1}
          >
            {name ? name : 'T'}
          </Avatar>
        </div>
      </Header>
      <Content>
        <Carousel autoplay>
          <div>
            <Image
              src="/images/slide-1.jpg"
              height={500}
              width={1366}
              className="slide__image"
            />
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        ,
      </Content>
      <Footer>Footer</Footer>
      <style jsx>
        {`
          .nav {
            display: flex;
            align-items: center;
          }
          .user__info {
            display: flex;
            align-items: center;
          }
          .slide__image {
            object-fit: cover;
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
