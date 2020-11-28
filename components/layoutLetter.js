import Head from 'next/head';
import React from 'react';

import { Typography } from 'antd';

const { Title } = Typography;
const LayoutLetter = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="login">
        <section className="login__hero">
          <header className="logo">
            <Title level={3}>ETraining</Title>
          </header>
        </section>
        <section className="login__form">{children}</section>
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

export default LayoutLetter;
