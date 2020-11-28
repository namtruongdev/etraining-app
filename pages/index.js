import Image from 'next/image';
import { useContext } from 'react';

import LayoutWrapper from '../components/layout';
import Banner from '../components/Home/Banner';
import Slogan from '../components/Home/Slogan';
import Why from '../components/Home/Why';
import WhyLearn from '../components/Home/WhyLearn';
import Rater from '../components/Home/Rater';
import { AuthContext } from '../context/Auth';

const Home = () => {
  const { name, username } = useContext(AuthContext);

  return (
    <LayoutWrapper
      name={name}
      username={username}
      title="Trang chủ | ETraining"
    >
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
