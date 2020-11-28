import 'antd/dist/antd.css';
import Auth from '../context/Auth';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Auth>
      <Component {...pageProps} />
    </Auth>

    <style jsx global>
      {`
        *,
        *::before,
        *::after {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          box-sizing: border-box;
        }

        html {
          font-size: 62.5%;
        }

        body {
          font-size: 1.6rem;
          scroll-behavior: smooth;
        }
      `}
    </style>
  </>
);

export default MyApp;
