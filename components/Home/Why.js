import Image from 'next/image';
import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;
const Why = () => {
  return (
    <section className="why">
      <div className="title">
        <Title level={2}>Tại sao bạn nên học tại ETraining?</Title>
        <Paragraph style={{ color: 'rgba(0, 0,0, 0.5)' }}>
          ETraining được xây dựng để giúp bạn hệ thống lại toàn bộ từ vựng tiếng
          Anh mà bạn đã học qua flashcard và nhắc nhở bạn học một từ nào đó
          nhiều lần nếu bạn hay quên nó.
        </Paragraph>
      </div>
      <div className="why__content">
        <div className="content">
          <Image
            src="/images/why-image-1.svg"
            width={574.17079}
            height={411.08457}
            layout="responsive"
            draggable="false"
          />
          <Title level={3} style={{ marginTop: '15px' }}>
            Bạn toàn quyền quyết định
          </Title>
          <Paragraph style={{ color: 'rgba(0, 0,0, 0.5)' }}>
            Học cái gì? chủ đề nào? Chúng tôi cho bạn tự quyết định để đảm bảo
            những thứ đang học là thiết thực nhất. Bạn chỉ cần nhập từ muốn học,
            phần còn lại cứ để chúng tôi lo
          </Paragraph>
        </div>
        <div className="content">
          <Image
            src="/images/why-image-2.svg"
            width={574.17079}
            height={411.08457}
            layout="responsive"
            draggable="false"
          />
          <Title level={3} style={{ marginTop: '15px' }}>
            Sử dụng flashcard màu sắc
          </Title>
          <Paragraph style={{ color: 'rgba(0, 0,0, 0.5)' }}>
            Bí quyết để học từ vựng hiệu quả với flashcard là sử dụng màu sắc để
            kích thích thị giác và tăng khả năng ghi nhớ
          </Paragraph>
        </div>
        <div className="content">
          <Image
            src="/images/why-image-3.svg"
            width={574.17079}
            height={411.08457}
            layout="responsive"
            draggable="false"
          />
          <Title level={3} style={{ marginTop: '15px' }}>
            Hệ thống các bài học và lý thuyết đầy đủ
          </Title>
          <Paragraph style={{ color: 'rgba(0, 0,0, 0.5)' }}>
            Tất cả các lý thuyết được rút ngắn lại sao cho dễ hiểu và được chia
            thành các bài học. Sau mỗi bài học sẽ có bài kiểm tra, hoàn thành
            xong sẽ được tính điểm và xếp hạng
          </Paragraph>
        </div>
        <div className="content">
          <Image
            src="/images/why-image-4.svg"
            width={574.17079}
            height={411.08457}
            layout="responsive"
            draggable="false"
          />
          <Title level={3} style={{ marginTop: '15px' }}>
            Thi đấu giữa các học viên
          </Title>
          <Paragraph style={{ color: 'rgba(0, 0,0, 0.5)' }}>
            Thỉnh thoảng chúng tôi sẽ tổ chức những cuộc thi giữa các học viên
            với nhau để tạo sự cạnh tranh trong học tập
          </Paragraph>
        </div>
      </div>
      <style jsx>
        {`
          .why {
            padding: 15px;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
          }

          .title {
            text-align: center;
            max-width: 1140px;
          }

          .why__content {
            display: flex;
            max-width: 1140px;
            flex-flow: wrap;
            justify-content: center;
          }
          .content {
            margin: 15px;
            flex: 1;
            text-align: center;
          }

          @media (max-width: 992px) {
            .content {
              flex: 0 0 45.5%;
            }
          }

          @media (max-width: 768px) {
            .content {
              flex: 0 0 100%;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Why;
