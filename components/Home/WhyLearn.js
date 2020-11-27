import Image from 'next/image';
import React from 'react';
import { List, Avatar, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const data = [
  {
    title: 'Tiếng Anh là một trong những ngôn ngữ được sử dụng rộng rãi nhất',
  },
  {
    title: 'Tiếng Anh sẽ mở ra nhiều cơ hội hơn cho bạn trong cuộc sống',
  },
  {
    title: 'Tiếng Anh là ngôn ngữ của rất nhiều tài liệu vĩ đại nhất thế giới',
  },
  {
    title: 'Tiếng Anh là một thử thách trí tuệ tuyệt vời',
  },
  {
    title: 'Tiếng Anh giúp bạn hoàn thiện bản thân',
  },
];

const WhyLearn = () => {
  return (
    <section className="why-learn">
      <div className="title">
        <Title level={2}>Tại sao phải học tiếng Anh?</Title>
        <Paragraph style={{ color: 'rgba(0, 0,0, 0.5)' }}>
          Nếu bạn đang tự hỏi tại sao phải học tiếng Anh thì hãy xem xét 5 lý do
          đáng thuyết phục dành cho người mới bắt đầu ở dưới đây nhé
        </Paragraph>
      </div>
      <div className="why-learn__content">
        <div className="content" id="content-left">
          <List
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      draggable="false"
                      src={
                        <Image
                          src="/images/teddy-bear.svg"
                          height={512}
                          width={512}
                          layout="intrinsic"
                        />
                      }
                    />
                  }
                  title={item.title}
                />
              </List.Item>
            )}
          />
        </div>
        <div className="content" id="content-right">
          <Image
            src="/images/why-learn-image.png"
            width={313}
            height={300}
            layout="fixed"
            draggable="false"
          />
        </div>
      </div>
      <style jsx>
        {`
          .title {
            text-align: center;
            max-width: 1140px;
          }

          .why-learn {
            display: flex;
            flex-direction: column;
            background: #fff;
            justify-content: center;
            align-items: center;
            padding: 15px;
            clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 95%);
          }

          .why-learn__content {
            display: flex;
            flex-flow: wrap;
            max-width: 1140px;
            width: 100%;
            justify-content: center;
          }

          .content {
            flex: 1;
            margin: 15px;
          }

          #content-right {
            display: flex;
            justify-content: flex-end;
          }

          @media (max-width: 992px) {
            .content {
              flex: 0 0 100%;
            }

            #content-right {
              display: none;
            }
          }
        `}
      </style>
    </section>
  );
};

export default WhyLearn;
