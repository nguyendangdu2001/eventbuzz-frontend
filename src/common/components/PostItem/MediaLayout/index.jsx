import React, { useEffect, useMemo, useState } from "react";
const SingleMedia = ({ media }) => {
  const [isVertical, setIsVertical] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setIsVertical(image.naturalWidth / image.naturalHeight <= 1);
    };
    image.src = media[0];
    return () => {};
  }, [media]);
  return (
    <div className={`${isVertical ? "aspect-w-1 aspect-h-1 relative" : ""}`}>
      <div
        className={`${
          isVertical ? "absolute inset-0 flex justify-center" : ""
        }`}
      >
        <img
          src={media[0]}
          alt=""
          className={`object-cover ${
            isVertical ? "h-full w-auto" : "w-full h-auto"
          }`}
        />
      </div>
    </div>
  );
};
const DoubleVerMedia = ({ media }) => {
  return (
    <div className="relative aspect-w-1 aspect-h-1">
      <div className="absolute top-0 left-0 right-0 overflow-hidden bottom-[calc(50%+1px)] h-[calc(50%-1px)]">
        <div className=" aspect-w-2 aspect-h-1">
          <img
            src={media[0]}
            alt=""
            className="absolute inset-0 object-cover w-full h-auto"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-[calc(50%-1px)] top-[calc(50%+1px)]">
        <div className="aspect-w-2 aspect-h-1">
          <img
            src={media[1]}
            alt=""
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
const DoubleHorMedia = ({ media }) => {
  return (
    <div className="relative aspect-w-1 aspect-h-1">
      <div className="absolute top-0 bottom-0 left-0 w-1/2 aspect-w-1 aspect-h-2 right-1/2">
        <img
          src={media[0]}
          alt=""
          className="absolute inset-0 object-cover w-auto h-full"
        />
      </div>
      <div className="absolute top-0 bottom-0 right-0 w-1/2 aspect-w-1 aspect-h-2 left-1/2">
        <img
          src={media[1]}
          alt=""
          className="absolute inset-0 object-cover w-auto h-full"
        />
      </div>
    </div>
  );
};
const DoubleMedia = ({ media }) => {
  const [isVertical, setIsVertical] = useState(false);
  useEffect(() => {
    const image1 = new Image();
    image1.onload = () => {
      if (image1.naturalWidth / image1.naturalHeight <= 1) return;
      setIsVertical(true);
    };
    image1.src = media[0];
    const image2 = new Image();
    image1.onload = () => {
      if (image2.naturalWidth / image2.naturalHeight <= 1) return;
      setIsVertical(true);
    };
    image1.src = media[0];
    return () => {};
  }, [media]);
  return isVertical ? (
    <DoubleVerMedia media={media} />
  ) : (
    <DoubleHorMedia media={media} />
  );
};
const TrippleHorMedia = ({ media }) => {
  return (
    <div className="relative aspect-w-1 aspect-h-1">
      <div className="absolute top-0 bottom-0 left-0 w-[calc(50%-1px)] right-[calc(50%+1px)] overflow-hidden">
        <div className="pt-[200%] overflow-hidden relative h-full">
          <img
            src={media[0]}
            alt=""
            className="absolute inset-0 object-cover w-auto h-full"
          />
        </div>
      </div>
      <div className="absolute top-0 right-0 w-[calc(50%-1px)] overflow-hidden bottom-[calc(50%+1px)] left-[calc(50%+1px)] h-[calc(50%-1px)]">
        <img
          src={media[1]}
          alt=""
          className="absolute object-cover w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-[calc(50%-1px)] overflow-hidden h-[calc(50%-1px)] top-[calc(50%+1px)] left-[calc(50%+1px)]">
        <div className="relative aspect-w-1 aspect-h-1">
          <img
            src={media[2]}
            alt=""
            className="absolute object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
const TrippleVerMedia = ({ media }) => {
  return (
    <div className="relative aspect-w-1 aspect-h-1">
      <div className="absolute top-0 left-0 right-0 w-full bottom-[calc(50%+1px)] h-[calc(50%-1px)] overflow-hidden">
        <div className="pt-[50%] overflow-hidden relative">
          <img
            src={media[0]}
            alt=""
            className="absolute inset-0 object-cover w-full h-auto"
          />
        </div>
      </div>
      <div className="absolute left-0 w-[calc(50%-1px)] overflow-hidden top-[calc(50%+1px)] right-[calc(50%+1px)] bottom-0 h-[calc(50%-1px)]">
        <div className="relative aspect-w-1 aspect-h-1">
          <img
            src={media[1]}
            alt=""
            className="absolute object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-[calc(50%-1px)] overflow-hidden h-[calc(50%-1px)] top-[calc(50%+1px)] left-[calc(50%+1px)]">
        <div className="relative aspect-w-1 aspect-h-1">
          <img
            src={media[2]}
            alt=""
            className="absolute object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};
const TrippleMedia = ({ media }) => {
  const [isVertical, setIsVertical] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setIsVertical(image.naturalWidth / image.naturalHeight > 1);
    };
    image.src = media[0];
    return () => {};
  }, [media]);

  // const img = media?.map((v) => {
  //   const image = new Image();

  //   image.src = v;
  //   image.ratio = image.naturalWidth / image.naturalHeight;
  //   return image;
  // });

  return isVertical ? (
    <TrippleVerMedia media={media} />
  ) : (
    <TrippleHorMedia media={media} />
  );
};
const QuaterHorMedia = ({ media }) => {
  return (
    <div className="relative aspect-w-1 aspect-h-1">
      <div className="absolute top-0 bottom-0 left-0 w-[calc(66,6666%-1px)] right-[calc(33,3333%+1px)]">
        <div className="pt-[150%] overflow-hidden relative">
          <img
            src={media[0]}
            alt=""
            className="absolute inset-0 object-cover w-auto h-full"
          />
        </div>
      </div>
      <div className="absolute top-0 right-0 w-1/3 overflow-hidden left-2/3 h-[calc(33,3333%-1px)]">
        <img
          src={media[1]}
          alt=""
          className="absolute object-cover w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 right-0 w-1/3 overflow-hidden h-[calc(33,3333%-2px)] top-1/3 left-2/3">
        <img
          src={media[2]}
          alt=""
          className="absolute object-cover w-full h-full"
        />
      </div>
      <div className="absolute top-2/3 bottom-0 right-0 w-[calc(33,3333%-1px)] overflow-hidden h-[calc(33,3333%-1px)] left-2/3">
        <img
          src={media[2]}
          alt=""
          className="absolute object-cover w-full h-full"
        />
      </div>
    </div>
  );
};
const QuaterVerMedia = ({ media, openViewer }) => {
  return (
    <div className="relative aspect-w-1 aspect-h-1">
      <div className="absolute top-0 right-0 left-0 h-[calc(66.6666%-1px)] bottom-[calc(33.3333%+1px)] overflow-hidden">
        <div
          role="button"
          tabIndex="-1"
          onKeyDown={openViewer}
          className="pt-[66.6666%] overflow-hidden relative"
          onClick={openViewer}
        >
          <img
            src={media[0]}
            alt=""
            className="absolute inset-0 object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="absolute left-0 top-[calc(66.6666%+1px)] w-[calc(33.3333%-1px)] overflow-hidden bottom-0 h-[calc(33.3333%-1px)] flex items-center bg-black/50">
        <img
          src={media[1]}
          alt=""
          className="absolute object-cover w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 top-[calc(66.6666%+1px)] w-[calc(33.3333%-2px)] overflow-hidden h-[calc(33.3333%-1px)] left-[calc(33.3333%+1px)] right-[calc(33.3333%+1px)]">
        <img
          src={media[2]}
          alt=""
          className="absolute object-cover w-full h-full"
        />
      </div>
      <div className="absolute bottom-0 top-[calc(66.6666%+1px)] right-0 w-[calc(33.3333%-1px)] overflow-hidden h-[calc(33.3333%-1px)] left-[calc(66.6666%+1px)]">
        <img
          src={media[3]}
          alt=""
          className="absolute object-cover w-full h-full"
        />
        {media?.length >= 5 && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <span className="text-3xl font-semibold text-gray-50">
              +{media?.length - 4}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
const QuaterMedia = ({ media, openViewer }) => {
  const [isVertical, setIsVertical] = useState(false);
  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      setIsVertical(image.naturalWidth / image.naturalHeight > 1);
    };
    image.src = media[0];
    return () => {};
  }, [media]);

  // const img = media?.map((v) => {
  //   const image = new Image();

  //   image.src = v;
  //   image.ratio = image.naturalWidth / image.naturalHeight;
  //   return image;
  // });

  return isVertical ? (
    <QuaterVerMedia media={media} openViewer={openViewer} />
  ) : (
    <QuaterHorMedia media={media} openViewer={openViewer} />
  );
};

const Selector = {
  1: SingleMedia,
  2: DoubleMedia,
  3: TrippleMedia,
  4: QuaterMedia,
};

const MediaLayout = ({ media = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const imgSrc = useMemo(() => media?.map((v) => ({ src: v })), [media]);
  console.log(imgSrc);
  if (media?.length === 0) return null;

  const Layout = Selector[Math.min(4, media?.length)];
  return (
    <>
      <Layout media={media} openViewer={() => setIsOpen(true)} />
      {/* {imgSrc?.length > 0 && (
        <ImgsView
          imgs={imgSrc}
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
        />
      )} */}
    </>
  );
};

export default MediaLayout;
