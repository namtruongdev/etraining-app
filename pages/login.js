import { useRouter } from 'next/router';
import Link from 'next/link';
import React, { useEffect, useState, useContext } from 'react';
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

import { AuthContext } from '../context/Auth';
import LayoutLetter from '../components/layoutLetter';
import { useIsMounted } from '../hooks/index';

const { Title } = Typography;

const Login = () => {
  const _isMounted = useIsMounted();
  const router = useRouter();
  const { code } = useContext(AuthContext);
  if (code === 200) router.replace('/');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    router.prefetch('/dashboard');
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
    if (_isMounted) {
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
            className=""
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

              <a className="forgot" href="">
                Quên mật khẩu
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ width: '100%' }}
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

            .forgot {
              float: right;
            }
          `}
        </style>
      </LayoutLetter>
    </Spin>
  );
};

export default Login;
