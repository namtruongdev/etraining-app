import dynamic from 'next/dynamic';
import React, { useState } from 'react';
import { Avatar } from 'antd';

import { useValidated } from '../../hooks';

const CreateModal = dynamic(() => import('./CreateModal'));

const CreatePost = () => {
  const { data } = useValidated();
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div className="create-post">
      <div className="create-post__input">
        <Avatar
          src="https://i.pravatar.cc/40"
          size={40}
          style={{ marginRight: 5 }}
        />
        <div className="input">
          {data?.name && (
            <span
              onClick={handleClick}
            >{`${data.name} ơi, bạn đang nghĩ gì thế?`}</span>
          )}
        </div>
      </div>
      <CreateModal visible={visible} handleCancel={handleCancel} />
      <style jsx>
        {`
          .create-post {
            background: #242526;
            max-width: 500px;
            margin: 0 auto;
            padding: 15px;
            border-radius: 10px;
          }
          .create-post__input {
            display: flex;
            align-items: center;
          }
          .input {
            margin-left: 5px;
            width: 100%;
          }

          .input span {
            background: #3a3b3c;
            min-height: 40px;
            display: inline-block;
            padding: 5px 15px;
            border-radius: 5rem;
            color: rgba(255, 255, 255, 0.65);
            width: 100%;
            transition: all 0.3s ease;
            cursor: pointer;
            display: flex;
            align-items: center;
          }

          .input span:hover {
            background: #4e4f50;
          }
        `}
      </style>
    </div>
  );
};

export default CreatePost;
