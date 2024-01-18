import s from "./Slider.module.scss";
import { useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { API_URL } from "../../const";

export const Slider = ({ data }) => {
  const mainSlider = useRef(null);
  const thumbnailSlider = useRef(null);

  console.log(data);

  const mainOptions = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    fixedWidth: 832,
    fixedHeight: 688,
    isNavigation: true,
    gap: 10,
    cover: true,
    pagination: false,
  };

  const thumbsOptions = {
    fixedWidth: 100,
    fixedHeight: 64,
    isNavigation: true,
    gap: 10,
    focus: "center",
    pagination: false,
    cover: true,
    breakpoints: {
      600: {
        fixedWidth: 66,
        fixedHeight: 40,
      },
    },
  };

  useEffect(() => {
    if (mainSlider.current && thumbnailSlider.current) {
      mainSlider.current.sync(thumbnailSlider.current.splide);
    }
  }, []);

  return (
    <div className={s.picture}>
      <div className={s.sliderMain}>
        {data?.images.length ? (
          <Splide options={mainOptions} ref={mainSlider}>
            {data.images.map((item, index) => (
              <SplideSlide key={index} className={s.slide}>
                <img
                  className={s.image}
                  src={`${API_URL}${item}`}
                  alt={data.name}
                />
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <div>Загрузка...</div>
        )}
      </div>
      <div className={s.sliderThumbnails}>
        {data?.images.length ? (
          <Splide options={thumbsOptions} ref={thumbnailSlider}>
            {data.images.map((item, index) => (
              <SplideSlide key={index} className={s.slideThumbnail}>
                <img
                  className={s.imageThumbnail}
                  src={`${API_URL}${item}`}
                  alt={data.name}
                />
              </SplideSlide>
            ))}
          </Splide>
        ) : (
          <div>Загрузка...</div>
        )}
      </div>
    </div>
  );
};
