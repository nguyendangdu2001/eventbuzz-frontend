import React, { memo } from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
const PictureTab = ({ className }) => {
  //   const { data } = useRandomImage();
  console.log("render");
  return (
    <div className={`${className} flex flex-wrap image-galery`}>
      {[...Array(30)]?.map((_, i) => (
        <LazyLoad
          height={80}
          style={{ flexGrow: 1, height: 200, margin: 4 }}
          width="20%"
          key={i}
        >
          <img
            className="rounded-lg"
            src={`https://picsum.photos/${
              300 + Math.ceil(Math.random() * 600)
            }/${300 + Math.ceil(Math.random() * 600)}.jpg`}
            alt=""
          />
        </LazyLoad>
      ))}
      <div className="flex-grow-[10]"></div>
    </div>
  );
};

export default styled(memo(PictureTab))`
  img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
`;
