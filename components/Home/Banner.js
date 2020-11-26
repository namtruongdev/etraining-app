import Image from 'next/image';
import React from 'react';
import { Carousel } from 'antd';

const Banner = () => {
  return (
    <>
      <Carousel autoplay>
        <div className="slide__image">
          <Image
            src="/images/slide-1.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            draggable="false"
          />
        </div>
        <div className="slide__image">
          <Image
            src="/images/slide-2.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            draggable="false"
          />
        </div>
        <div className="slide__image">
          <Image
            src="/images/slide-3.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            draggable="false"
          />
        </div>
        <div className="slide__image">
          <Image
            src="/images/slide-4.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            draggable="false"
          />
        </div>
      </Carousel>
      <div className="banner--fadeBottom"></div>
      <style jsx>
        {`
          .slide__image {
            height: 600px;
            position: relative;
          }

          .banner--fadeBottom {
            height: 7.4rem;
            background-image: linear-gradient(
              180deg,
              transparent,
              rgba(163, 163, 163, 0.61),
              #ededed
            );
            margin-top: -7.4rem;
            z-index: 11;
            position: relative;
          }
        `}
      </style>
    </>
  );
};

export default Banner;
