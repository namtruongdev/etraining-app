import Image from 'next/image';
import dynamic from 'next/dynamic';

import { Layout } from 'antd';
import LayoutWrapper from '../components/layout';
const Banner = dynamic(() => import('../components/Home/Banner'));
const Slogan = dynamic(() => import('../components/Home/Slogan'));
const Why = dynamic(() => import('../components/Home/Why'));
const WhyLearn = dynamic(() => import('../components/Home/WhyLearn'));
const Rater = dynamic(() => import('../components/Home/Rater'));

const { Content } = Layout;

const Home = () => {
  return (
    <LayoutWrapper title="Trang chủ | ETraining">
      <Content>
        <Banner />
        <Slogan />
        <section className="divider">
          <Image
            src="/images/divider.png"
            height={60}
            width={303}
            layout="intrinsic"
          />
        </section>
        <Why />
        <WhyLearn />
        <Rater />
      </Content>
      <style jsx>
        {`
          .divider {
            background: #fff;
            padding-bottom: 30px;
            display: flex;
            justify-content: center;
            clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 70%);
          }
        `}
      </style>
    </LayoutWrapper>
  );
};

export default Home;
