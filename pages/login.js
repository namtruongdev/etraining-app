import React from 'react';
import { Row, Typography, Col } from 'antd';
import 'antd/dist/antd.css';
import css from 'styled-jsx/css';

const { className, styles } = css.resolve`
  .ant-col {
    background: url(./images/login-hero.jpg);
    height: 100vh;
    background-size: cover;
    max-width: 1280px;
    min-width: 500px;
    background-position: bottom right;
    padding: 15px;
  }
`;
const { Title } = Typography;
const Login = () => {
  return (
    <main>
      <Row>
        <Col lg={8} className={className}>
          <Title>ETraining</Title>
        </Col>
        <Col lg={16}>
          <Title>
            Đăng nhập vào nền tảng giáo dục trực tuyến hàng đầu thế giới của
            chúng tôi
          </Title>
        </Col>
      </Row>
      {styles}
      <style jsx>
        {`
          .ant-col {
            padding: 3rem !important;
          }
        `}
      </style>
    </main>
  );
};

export default Login;
