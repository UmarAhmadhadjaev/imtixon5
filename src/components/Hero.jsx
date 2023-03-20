import React, { useState } from "react";
import img1 from "../img/cfubllfhj8j9g698kj70.jpg";
import img2 from "../img/cfv22hfhj8j9g698o2c0.jpg";
import img3 from "../img/cg7ca9ng49devoaaf13g.jpg";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";

const Hero = () => {
  const slides = [
    {
       url:"https://images.uzum.uz/cg9a5nfg49devoaaom6g/main_page_banner.jpg",
    },
    {
      url: "https://images.uzum.uz/cg9a74vhj8j9g69a2rdg/main_page_banner.jpg",
    },
    {
      url: "https://images.uzum.uz/cg9a8kfhj8j9g69a2ro0/main_page_banner.jpg",
    },
    {
      url: "https://images.uzum.uz/cg091pnhj8j9g698srag/main_page_banner.jpg",
    },
    {
      url: img3,
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = current === slides.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  };

  const goToSlide = (index) => {
    setCurrent(index);
  };

  return (
    <div className="max-w-[1400px] h-[580px] w-full m-auto py-10 relative mt-11 group">
      <div
        style={{ backgroundImage: `url(${slides[current].url})` }}
        className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
      ></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, index) => (
          <div key={index} onClick={() => goToSlide(index)} className="text-2xl cursor-pointer">
            {/* <RxDotFilled className="text-black" /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
