import Link from 'next/link';
import Image from 'next/image';
import { getData } from '../utils/getData';
import { List, Layout, Menu, Button, Avatar, Carousel, Typography } from 'antd';
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
  MenuOutlined,
  BellOutlined,
} from '@ant-design/icons';
import style from '../styles/index.module.css';

const { SubMenu } = Menu;

const data = [
  {
    title: 'Tiếng Anh là một trong những ngôn ngữ được sử dụng rộng rãi nhất',
  },
  {
    title: 'Tiếng Anh sẽ mở ra nhiều cơ hội hơn cho bạn trong cuộc sống',
  },
  {
    title: 'Tiếng Anh là ngôn ngữ của rất nhiều tài liệu vĩ đại nhất thế giới',
  },
  {
    title: 'Tiếng Anh là một thử thách trí tuệ tuyệt vời',
  },
  {
    title: 'Tiếng Anh giúp bạn hoàn thiện bản thân',
  },
];

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
          <div className="why__content">
            <div className="why__content__item  .why__content__item__1">
              <Image
                src="/images/why-image-1.svg"
                width={574.17079}
                height={411.08457}
                layout="responsive"
                draggable="false"
              />
              <Title level={3} style={{ marginTop: '15px' }}>
                Bạn toàn quyền quyết định
              </Title>
              <Paragraph style={{ color: 'rgba(0, 0,0, 0.5)' }}>
                Học cái gì? chủ đề nào? Chúng tôi cho bạn tự quyết định để đảm
                bảo những thứ đang học là thiết thực nhất. Bạn chỉ cần nhập từ
                muốn học, phần còn lại cứ để chúng tôi lo
              </Paragraph>
            </div>
            <div className="why__content__item  .why__content__item__2">
              <Image
                src="/images/why-image-2.svg"
                width={574.17079}
                height={411.08457}
                layout="responsive"
                draggable="false"
              />
              <Title level={3} style={{ marginTop: '15px' }}>
                Sử dụng flashcard màu sắc
              </Title>
              <Paragraph style={{ color: 'rgba(0, 0,0, 0.5)' }}>
                Bí quyết để học từ vựng hiệu quả với flashcard là sử dụng màu
                sắc để kích thích thị giác và tăng khả năng ghi nhớ
              </Paragraph>
            </div>
            <div className="why__content__item .why__content__item__3">
              <Image
                src="/images/why-image-3.svg"
                width={574.17079}
                height={411.08457}
                layout="responsive"
                draggable="false"
              />
              <Title level={3} style={{ marginTop: '15px' }}>
                Hệ thống các bài học và lý thuyết đầy đủ
              </Title>
              <Paragraph style={{ color: 'rgba(0, 0,0, 0.5)' }}>
                Tất cả các lý thuyết được rút ngắn lại sao cho dễ hiểu và được
                chia thành các bài học. Sau mỗi bài học sẽ có bài kiểm tra, hoàn
                thành xong sẽ được tính điểm và xếp hạng
              </Paragraph>
            </div>
            <div className="why__content__item  .why__content__item__4">
              <Image
                src="/images/why-image-4.svg"
                width={574.17079}
                height={411.08457}
                layout="responsive"
                draggable="false"
              />
              <Title level={3} style={{ marginTop: '15px' }}>
                Thi đấu giữa các học viên
              </Title>
              <Paragraph style={{ color: 'rgba(0, 0,0, 0.5)' }}>
                Thỉnh thoảng chúng tôi sẽ tổ chức những cuộc thi giữa các học
                viên với nhau để tạo sự cạnh tranh trong học tập
              </Paragraph>
            </div>
          </div>
        </section>
        <section className="why-learn">
          <div className="title">
            <Title level={2}>Tại sao phải học tiếng Anh?</Title>
            <Paragraph style={{ color: 'rgba(0, 0,0, 0.5)' }}>
              Nếu bạn đang tự hỏi tại sao phải học tiếng Anh thì hãy xem xét 5
              lý do đáng thuyết phục dành cho người mới bắt đầu ở dưới đây nhé
            </Paragraph>
          </div>
          <div className="why-learn__content">
            <div className="why-learn__content__item why-learn__content__item-1">
              <List
                itemLayout="horizontal"
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          draggable="false"
                          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        />
                      }
                      title={item.title}
                    />
                  </List.Item>
                )}
              />
            </div>
            <div className="why-learn__content__item why-learn__content__item-2">
              <Image
                src="/images/why-learn-image.png"
                width={313}
                height={300}
                layout="fixed"
                draggable="false"
              />
            </div>
          </div>
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
            flex-direction: column;
            align-items: center;
          }

          .title {
            text-align: center;
            max-width: 1140px;
          }

          .why__content {
            display: flex;
            max-width: 1140px;
            flex-flow: wrap;
            justify-content: center;
          }
          .why__content__item {
            margin: 15px;
            flex: 1;
            text-align: center;
          }

          .why-learn {
            display: flex;
            flex-direction: column;
            background: #fff;
            justify-content: center;
            align-items: center;
            padding: 15px;
          }

          .why-learn__content {
            display: flex;
            flex-flow: wrap;
            max-width: 1140px;
            width: 100%;
            justify-content: center;
          }

          .why-learn__content__item {
            flex: 1;
            margin: 15px;
          }

          .why-learn__content__item-2 {
            display: flex;
            justify-content: flex-end;
          }

          @media (max-width: 992px) {
            .why__content__item {
              flex: 0 0 45.5%;
            }

            .why-learn__content__item {
              flex: 0 0 100%;
            }

            .why-learn__content__item-2 {
              display: none;
            }
          }

          @media (max-width: 768px) {
            .why__content__item {
              flex: 0 0 100%;
            }

            .learn-now {
              display: none;
            }
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
