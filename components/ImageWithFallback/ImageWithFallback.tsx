import React, { useState } from "react";
import Image from "next/image";

const ImageWithFallback = (props) => {
  const { src, fallbackSrc, ...rest } = props;
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      {...rest}
      src={
        imgSrc ||
        "https://github.com/sushiswap/list/blob/master/logos/token-logos/token/unknown.png?raw=true"
      }
      onErrorCapture={(e) => {
        setImgSrc(fallbackSrc);
        console.log({ target: e });
      }}
      onError={(e) => {
        setImgSrc(fallbackSrc);
        console.log({ target: e });
      }}
    />
  );
};

export default ImageWithFallback;
