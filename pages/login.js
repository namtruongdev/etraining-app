import Head from 'next/head';
import React from 'react';
import Link from 'next/link';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Typography, Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';
import styles from '../styles/login.module.css';

const { Title } = Typography;

const Login = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <>
      <Head>
        <title>Đăng nhập | ETraining</title>
      </Head>
      <div className="login">
        <section className="login__hero">
          <header className="logo">
            <Title level={3}>ETraining</Title>
          </header>
        </section>
        <section className="login__form">
          <main className="form">
            <Title level={3}>Đăng nhập vào ETraining</Title>
            <Form
              name="normal_login"
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
                <Input
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
                Không phải thành viên? <Link href="/">Đăng ký ngay!</Link>
              </Form.Item>
            </Form>
          </main>
        </section>
        <style jsx>
          {`
            .login {
              display: grid;
              grid-template-areas:
                'loginHero'
                'loginForm';
            }
            .login__hero {
              grid-area: loginHero;
              width: 100%;
            }

            .logo {
              margin: 0 auto;
              max-width: 416px;
              text-align: left;
              width: 100%;
              padding: 15px;
            }
            .login__form {
              grid-area: loginForm;
              width: 100%;
            }

            .form {
              padding: 15px;
              width: 100%;
              max-width: 416px;
              margin: 0 auto;
            }

            @media (min-width: 992px) {
              .login {
                grid-template-areas: 'loginHero loginForm';
                height: 100vh;
                grid-template-columns: auto 1fr;
              }

              .login__hero {
                background: url(./images/login-hero.jpg);
                background-size: cover;
                background-position: bottom center;
                width: 450px;
              }
              .logo {
                padding: 30px;
              }

              .login__form {
                display: flex;
                align-items: center;
              }
            }

            @media (min-width: 1200px) {
              .login__hero {
                width: 500px;
              }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Login;
