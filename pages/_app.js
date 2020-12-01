import 'antd/dist/antd.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />

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

        .ant-modal-content {
          color: rgba(255, 255, 255, 0.65);
        }
        .ant-modal-header,
        .ant-modal-body {
          background: #242526;
        }

        .ant-modal-header {
          border-bottom: 1px solid #303030;
        }
        .ant-modal-title {
          color: rgba(255, 255, 255, 0.65);
        }

        .ant-modal-close {
          color: rgba(255, 255, 255, 0.65);
        }

        .ant-modal-footer {
          background: #242526;
          border-top: 1px solid #303030;
        }

        .ant-btn-primary[disabled],
        .ant-btn-primary[disabled]:hover,
        .ant-btn-primary[disabled]:focus,
        .ant-btn-primary[disabled]:active {
          background: #505151;
          border-color: #505151;
          color: #828283;
        }

        .ant-select:not(.ant-select-customize-input) .ant-select-selector {
          background: #3a3b3c;
          border: 1px solid #3a3b3c;
          border-radius: 50px;
          color: rgba(255, 255, 255, 0.65);
        }
        .ant-input:focus,
        .ant-input-focused {
          box-shadow: none;
        }

        textarea::placeholder {
          font-size: 2rem;
        }

        textarea {
          overflow: hidden;
        }
      `}
    </style>
  </>
);

export default MyApp;
