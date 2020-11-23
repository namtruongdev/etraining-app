import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import LayoutLetter from '../components/layoutLetter';

import {
  Form,
  Input,
  Tooltip,
  Row,
  Col,
  Checkbox,
  Button,
  notification,
  Spin,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

const formItemLayout = {
  labelAlign: 'left',
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 24,
    },
  },
};

const Register = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/login');
  }, []);

  const onFinish = async (values) => {
    setLoading(true);
    const res = await fetch('/api/signup', {
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
      return router.push('/login');
    } else {
      if (data) setLoading(false);
      notification['error']({
        message: data.message,
      });
      return;
    }
  };

  return (
    <Spin tip="Đang đăng ký..." spinning={loading}>
      <LayoutLetter title="Đăng ký | ETraining">
        <main className="form">
          <Form
            {...formItemLayout}
            size="large"
            name="register"
            onFinish={onFinish}
            scrollToFirstError
          >
            <Row gutter={15}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="Tên"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập Tên của bạn!',
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="username"
                  label={
                    <span>
                      Tên người dùng&nbsp;
                      <Tooltip title="Tên người dùng được sử dụng để đăng nhập">
                        <QuestionCircleOutlined />
                      </Tooltip>
                    </span>
                  }
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng nhập Tên người dùng!',
                      whitespace: true,
                    },
                    {
                      pattern: '^[a-zA-Z0-9]+$',
                      message:
                        'Tên người dùng không được chứa các ký tự đặc biệt!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              name="email"
              label="E-mail"
              rules={[
                {
                  type: 'email',
                  message: 'E-mail không hợp lệ!',
                },
                {
                  required: true,
                  message: 'Vui lòng nhập E-mail của bạn!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Mật khẩu"
              rules={[
                {
                  required: true,
                  message: 'Vui lòng nhập Mật khẩu của bạn!',
                  whitespace: true,
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="confirm"
              label="Nhập lại Mật khẩu"
              dependencies={['password']}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: 'Vui lòng Nhập lại mật khẩu của bạn!',
                  whitespace: true,
                },
                ({ getFieldValue }) => ({
                  validator(rule, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }

                    return Promise.reject(
                      'Mật khẩu nhập lại không trùng với Mật khẩu đã nhập!'
                    );
                  },
                }),
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject('Vui lòng đồng ý điều khoản!'),
                },
              ]}
            >
              <Checkbox>
                Tôi đã đọc <a href="">điều khoản</a>
              </Checkbox>
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Đăng ký
              </Button>
              <span className="signin">
                Đã là thành viên? <Link href="/login">Đăng nhập!</Link>
              </span>
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

            .signin {
              float: right;
              line-height: 40px;
            }
          `}
        </style>
      </LayoutLetter>
    </Spin>
  );
};

export default Register;
