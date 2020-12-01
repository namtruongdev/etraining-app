import React from 'react';
import { Modal, Button } from 'antd';

const CreateModal = ({ visible, handlePost, handleCancel }) => {
  return (
    <Modal
      title="Tạo bài viết"
      visible={visible}
      onOk={handlePost}
      onCancel={handleCancel}
      footer={
        <Button
          type="primary"
          style={{ width: '100%' }}
          style={{ background: '#242526' }}
        >
          Đăng
        </Button>
      }
    >
      <p>haha haha ahah ahah ahah</p>
    </Modal>
  );
};

export default CreateModal;
