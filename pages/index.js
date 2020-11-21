import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Link href="/login">Dang nhap...</Link>
    </Layout>
  );
}
