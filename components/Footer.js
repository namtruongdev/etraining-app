import React, { memo } from 'react';
import { Layout, Typography, Select } from 'antd';

import {
  TwitterOutlined,
  GithubOutlined,
  FacebookOutlined,
  HeartFilled,
  DingdingOutlined,
} from '@ant-design/icons';

const { Footer } = Layout;
const { Title } = Typography;
const { Option } = Select;

const FooterPrimary = () => {
  return (
    <Footer
      style={{
        background: '#10182F',
        color: '#A2AED2',
        padding: '24px 15px',
        clipPath: 'polygon(0 0, 100% 5%, 100% 100%, 0 100%)',
      }}
    >
      <div className="container">
        <section className="logo">
          <Title level={3} style={{ color: '#a2aed2', textAlign: 'center' }}>
            <DingdingOutlined />
            ETraining
          </Title>
        </section>
        <section className="nav-footer">
          <div>
            <a>Điều khoản dịch vụ</a>
            <a>Chính sách bảo mật</a>
            <a>Bảo mật</a>
            <a>Sitemap</a>
          </div>
        </section>
        <section className="copyright">
          <div id="language">
            <Select
              defaultValue="vietnamese"
              style={{ width: 120, color: '#a2aed2' }}
            >
              <Option value="vietnamese">Tiếng Việt</Option>
              <Option value="english">English</Option>
              <Option value="japanese">日本人</Option>
            </Select>
          </div>
          <div id="social">
            <a>
              <TwitterOutlined style={{ fontSize: '2rem' }} />
            </a>
            <a>
              <GithubOutlined style={{ fontSize: '2rem' }} />
            </a>
            <a>
              <FacebookOutlined style={{ fontSize: '2rem' }} />
            </a>
          </div>
          <div id="copyright">
            &copy; {new Date().getFullYear()} ETraining. Made with{' '}
            <HeartFilled style={{ color: 'red' }} /> by{' '}
            <a
              rel="noreferrer noopener"
              target="_blank"
              href="https://fb.com/truongduongg99"
              style={{ color: '#fff' }}
            >
              Nam Trường
            </a>
          </div>
        </section>
      </div>
      <style jsx>
        {`
          .nav-footer a {
            color: #a2aed2;
            padding: 7px 15px;
            display: inline-block;
          }

          .nav-footer a:hover {
            color: #fff;
            transition: all 0.3s ease;
          }
          .container {
            max-width: 1140px;
            margin: 0 auto;
          }

          .copyright {
            display: flex;
            padding: 15px 0;
            flex-flow: wrap;
          }

          .copyright div {
            flex: 1;
          }

          #copyright {
            text-align: right;
          }

          #social {
            text-align: center;
          }

          #social a {
            color: #a2aed2;
            padding: 0.7rem 1.5rem;
            display: inline-block;
          }

          #social a:hover {
            color: #fff;
            transition: all 0.3s ease;
          }
          .nav-footer {
            display: flex;
            justify-content: center;
            padding: 15px 0;
          }

          div
            :global(.ant-select:not(.ant-select-customize-input)
              .ant-select-selector) {
            background-color: #10182f;
            border: none;
          }

          div :global(.ant-select-arrow) {
            color: #a2aed2;
          }

          @media (max-width: 992px) {
            .copyright {
            }
            #copyright {
              flex: 0 0 100%;
              text-align: center;
              padding-top: 20px;
            }

            #social {
              text-align: right;
            }
          }
        `}
      </style>
    </Footer>
  );
};

export default memo(FooterPrimary);
