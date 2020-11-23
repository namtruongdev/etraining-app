import Link from 'next/link';
import { getData } from '../utils/getData';

import Layout from '../components/layout';

const Home = ({ name }) => (
  <Layout title="Trang chủ | ETraining">
    {name && <h1>Chào mừng {name} đã quay trở lại!</h1>}
    <Link href="/login">Dang nhap...</Link>
  </Layout>
);

export const getServerSideProps = async (ctx) => {
  const data = await getData(`${process.env.URL}api/auth/signin`, ctx);
  return {
    props: data,
  };
};
export default Home;
