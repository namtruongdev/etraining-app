import React from 'react';
import { Typography, Button } from 'antd';

const { Title } = Typography;
const Slogan = () => {
  return (
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
      <style jsx>
        {`
          .slogan {
            padding: 4rem 1.5rem 1.5rem 1.5rem;
            display: flex;
            justify-content: center;
            background: #fff;
          }

          .slogan div {
            text-align: center;
          }
        `}
      </style>
    </section>
  );
};

export default Slogan;
