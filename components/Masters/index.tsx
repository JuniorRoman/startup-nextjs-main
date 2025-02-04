"use client";
import React, { useState, useEffect } from "react";
import slides from "./dataMasters";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const TeamCarousel = () => {
  const [itemsToShow, setItemsToShow] = useState(3.95);

  const updateItemsToShow = () => {
    const width = window.innerWidth;
    if (width < 640) {
      setItemsToShow(1);
    } else if (width < 1024) {
      setItemsToShow(3);
    } else if (width < 1280) {
      setItemsToShow(4);
    } else {
      setItemsToShow(3.95);
    }
  };

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: itemsToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mx-auto  overflow-hidden rounded-md"
              data-wow-delay=".15s"
            >
              <div className="relative  items-center justify-center">
                <div className="container mx-auto px-4 py-8">
                  <div className="wow fadeInUp mb-5 text-center">
                    <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
                      Nasz sympatyczny zespół
                    </h2>
                    <p className="text-base !leading-relaxed text-body-color md:text-lg">
                      To właśnie ci ludzie stoją za naszymi sukcesami i
                      osiągnięciami.
                    </p>
                  </div>
                  <Slider {...settings}>
                    {slides.map((slide, index) => (
                      <div key={index} className="px-2">
                        <div className="flex w-full flex-col items-center justify-center gap-1 rounded-xl border border-solid border-slate-600  [box-shadow:rgb(255,_255,_255)_6px_6px]">
                          <div className="carousel__item">
                            <Image
                              src={slide.image}
                              alt="Image"
                              width={650}
                              height={200}
                              className="h-96 w-100 object-cover rounded-xl"
                            />
                          </div>
                          <div className="p-4 text-center">
                            <h3 className="text-xl font-bold">{slide.title}</h3>
                            <p className="mt-2 text-gray-600">{slide.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                  <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default TeamCarousel;
