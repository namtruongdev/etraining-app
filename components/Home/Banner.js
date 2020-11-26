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
      <style jsx>
        {`
          .slide__image {
            height: 600px;
            position: relative;
          }
        `}
      </style>
    </>
  );
};

export default Banner;
