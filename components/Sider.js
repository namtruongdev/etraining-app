import React, { memo } from 'react';

import { Menu, Layout } from 'antd';
import {
  ReadOutlined,
  RadarChartOutlined,
  ContainerOutlined,
  TeamOutlined,
  SearchOutlined,
  MergeCellsOutlined,
  AliwangwangOutlined,
} from '@ant-design/icons';

const { Sider } = Layout;

const SiderWrapper = () => {
  return (
    <Sider
      style={{
        overflow: 'auto',
        minHeight: '100vh',
        position: 'fixed',
        left: 0,
        zIndex: '11',
        paddingTop: '79px',
        background: '#141414',
      }}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ background: '#141414' }}
      >
        <Menu.Item key="1" icon={<ReadOutlined />}>
          Bảng tin
        </Menu.Item>
        <Menu.Item key="2" icon={<RadarChartOutlined />}>
          Bảng xếp hạng
        </Menu.Item>
        <Menu.Item key="6" icon={<MergeCellsOutlined />}>
          Vào thi
        </Menu.Item>
        <Menu.Item key="7" icon={<AliwangwangOutlined />}>
          Ôn luyện
        </Menu.Item>
        <Menu.Item key="3" icon={<ContainerOutlined />}>
          Ngân hàng đề thi
        </Menu.Item>
        <Menu.Item key="4" icon={<TeamOutlined />}>
          Thành viên
        </Menu.Item>
        <Menu.Item key="5" icon={<SearchOutlined />}>
          Tra cứu
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default memo(SiderWrapper);
