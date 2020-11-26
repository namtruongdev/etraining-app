import Image from 'next/image';
import React from 'react';
import { Carousel, Typography, Avatar } from 'antd';

const { Title, Paragraph, Text } = Typography;

const Rater = () => {
  return (
    <section className="rate">
      <div className="container">
        <div className="title">
          <Title level={2}>Học viên nói gì về ETraining?</Title>
        </div>
        <Carousel effect="fade" autoplay>
          <div>
            <div className="people">
              <div className="avatar">
                <Avatar
                  size={150}
                  src={
                    <Image
                      src="/images/luong.jpg"
                      layout="intrinsic"
                      width={300}
                      height={300}
                    />
                  }
                />
              </div>
              <div className="comment">
                <Paragraph>
                  Trước đây em rất ngại học từ vựng tiếng Anh vì mỗi lần học là
                  phải tìm lại các từ vựng mà mình đã ghi chép đâu đó trong vở
                  rồi học thuộc từng từ rất nhàm chán. Nhưng từ khi biết đến
                  ETraining việc học tiếng Anh của em đã trở lên thú vị hơn
                </Paragraph>
                <Text type="secondary">
                  - Khúc Anh Minh Lượng @ sinh viên HUST -
                </Text>
              </div>
            </div>
          </div>
          <div>
            <div className="people">
              <div className="avatar">
                <Avatar
                  size={150}
                  src={
                    <Image
                      src="/images/hoang.jpg"
                      layout="intrinsic"
                      width={300}
                      height={300}
                    />
                  }
                />
              </div>
              <div className="comment">
                <Paragraph>
                  Trên mạng có rất nhiều website học tiếng Anh bằng flashcard
                  nhưng hầu như toàn phải trả phí rồi mới được học. Em thấy học
                  tiếng Anh ở đây vừa miễn phí lại còn chất lượng
                </Paragraph>
                <Text type="secondary">
                  - Trần Phạm Huy Hoàng @ sinh viên HUST -
                </Text>
              </div>
            </div>
          </div>
          <div>
            <div className="people">
              <div className="avatar">
                <Avatar
                  size={150}
                  src={
                    <Image
                      src="/images/duong.jpg"
                      layout="intrinsic"
                      width={300}
                      height={300}
                    />
                  }
                />
              </div>
              <div className="comment">
                <Paragraph>
                  Học từ vựng theo cách truyền thống vừa nhàm chán mà lại không
                  nhớ được nhiều từ và lâu dài. Từ khi em chuyển sang phương
                  pháp học mới này, em đã nhớ được nhiều từ và nhớ lâu hơn trong
                  thời gian ngắn.
                </Paragraph>
                <Text type="secondary">
                  - Nguyễn Tùng Dương @ sinh viên HUMG -
                </Text>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
      <style jsx>
        {`
          .title {
            text-align: center;
          }
          .rate {
            padding: 15px 15px 30px 15px;
          }
          .container {
            max-width: 1140px;
            margin: 0 auto;
          }

          .people {
            display: flex;
          }

          .comment {
            margin-left: 30px;
          }

          .avatar {
            flex: 0 0 150px;
          }
        `}
      </style>
    </section>
  );
};

export default Rater;
