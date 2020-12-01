import React, { useState } from 'react';
import { Modal, Button, Avatar, Typography, Select, Input } from 'antd';

import { GlobalOutlined, LockOutlined } from '@ant-design/icons';

const { Text } = Typography;
const { Option } = Select;
const { TextArea } = Input;
const CreateModal = ({ visible, handleCancel, name }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [privacy, setPrivacy] = useState('public');
  const [post, setPost] = useState('');

  const handlePost = (e) => {};
  const handleOnChange = (e) => {
    if (e === 'Chỉ mình tôi' || e === 'Công khai') return setPrivacy(e);
    if (e.target.value === '') setIsDisabled(true);
    else {
      setPost(e.target.value);
      setIsDisabled(false);
    }
  };
  return (
    <Modal
      title="Tạo bài viết"
      visible={visible}
      onCancel={handleCancel}
      titleStyle={{ background: '#242526' }}
      footer={
        <Button
          onClick={handlePost}
          type="primary"
          style={{ width: '100%' }}
          disabled={isDisabled}
        >
          Đăng
        </Button>
      }
    >
      <div className="modal__header">
        <Avatar src="https://i.pravatar.cc/50" size={40} />
        <div className="modal__title">
          <Text style={{ color: 'rgba(255, 255, 255, 0.65)' }}>{name}</Text>
          <Select
            defaultValue="Công khai"
            style={{ width: 'auto' }}
            size="small"
            onSelect={handleOnChange}
          >
            <Option value="Công khai">
              <GlobalOutlined /> Công khai
            </Option>
            <Option value="Chỉ mình tôi">
              <LockOutlined /> Chỉ mình tôi
            </Option>
          </Select>
        </div>
      </div>
      <TextArea
        onChange={handleOnChange}
        placeholder={`${name} ơi, bạn đang nghĩ gì thế?`}
        autoSize={{ minRows: 2 }}
        draggable="false"
        style={{
          marginTop: '15px',
          background: '#242526',
          border: 'none',
          color: 'rgba(255, 255, 255, 0.65)',
          outline: 'none',
          resize: 'none',
          fontSize: '2rem',
        }}
      />
      <style jsx>
        {`
          .modal__header {
            display: flex;
            align-items: center;
          }
          .modal__title {
            margin-left: 15px;
            display: flex;
            flex-direction: column;
          }

          div :global(.ant-select-arrow) {
            color: rgba(255, 255, 255, 0.65);
          }
        `}
      </style>
    </Modal>
  );
};

export default CreateModal;
