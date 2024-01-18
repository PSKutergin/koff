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
    isNavigation: true,
    gap: 10,
    cover: true,
    pagination: false,
  };

  const thumbsOptions = {
    type: "loop",
    isNavigation: true,
    gap: 10,
    focus: "center",
    perPage: 4,
    pagination: false,
    cover: true,
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
