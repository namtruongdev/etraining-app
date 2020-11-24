import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getData } from '../utils/getData';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {
  Typography,
  Form,
  Input,
  Button,
  Checkbox,
  Spin,
  notification,
} from 'antd';
import LayoutLetter from '../components/layoutLetter';
import styles from '../styles/login.module.css';

const { Title } = Typography;

const Login = ({ code }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    router.prefetch('/dashboard');
    if (code === 200) router.replace('/');
  }, []);

  const onFinish = async (values) => {
    setLoading(true);
    const res = await fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      if (data) setLoading(false);
      notification['success']({
        message: data.message,
      });
      router.push('/dashboard');
    } else {
      if (data) setLoading(false);
      notification['error']({
        message: data.message,
      });
    }
  };

  return (
    <Spin tip="Đang đăng nhập..." spinning={loading}>
      <LayoutLetter title="Đăng nhập | ETraining">
        <main className="form">
          <Title level={3}>Đăng nhập vào ETraining</Title>
          <Form
            name="normal_login"
            size="large"
            className={styles.form}
            initialValues={{ remember: false }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền tên người dùng của bạn!',
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Tên người dùng"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng điền mật khẩu của bạn!',
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Mật khẩu"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Nhớ mật khẩu</Checkbox>
              </Form.Item>

              <a className={styles.forgot} href="">
                Quên mật khẩu
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles.button}
              >
                Đăng nhập
              </Button>
              Không phải thành viên? <Link href="/register">Đăng ký ngay!</Link>
            </Form.Item>
          </Form>
        </main>
        <style jsx>
          {`
            .form {
              padding: 15px;
              width: 100%;
              max-width: 416px;
              margin: 0 auto;
            }
          `}
        </style>
      </LayoutLetter>
    </Spin>
  );
};

export const getServerSideProps = async (ctx) => {
  const data = await getData(`${process.env.URL}api/auth/signin`, ctx);
  return {
    props: data,
  };
};

export default Login;
