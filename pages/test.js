import React from 'react';

const test = () => {
  return (
    <div>
      <p className="a">lorem </p>
      <p className="b">the p 2 </p>
      <style jsx>
        {`
          .b {
            display: none;
          }
          @media (max-width: 680px) {
            .a {
              display: none;
            }
            .b {
              display: block;
            }
          }
        `}
      </style>
    </div>
  );
};

export default test;
