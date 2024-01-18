import s from "./Card.module.scss";
import { Container } from "../../views/Container/Container";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Splide, SplideSlide } from "@splidejs/react-splide";

export const Card = () => {
  const { productId } = useParams();
  console.log(productId);

  const mainSlider = useRef(null);
  const thumbnailSlider = useRef(null);

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
    <section className={s.card}>
      <Container className={s.container}>
        <h2 className={s.title}>Кресло с подлокотниками</h2>
        <div className={s.picture}>
          <div className={s.sliderMain}>
            <Splide options={mainOptions} ref={mainSlider}>
              <SplideSlide>
                <img src="/image/photo.png" alt="Image 1" />
              </SplideSlide>
              <SplideSlide>
                <img src="/image/photo.png" alt="Image 2" />
              </SplideSlide>
              <SplideSlide>
                <img src="/image/photo.png" alt="Image 3" />
              </SplideSlide>
              <SplideSlide>
                <img src="/image/photo.png" alt="Image 1" />
              </SplideSlide>
              <SplideSlide>
                <img src="/image/photo.png" alt="Image 2" />
              </SplideSlide>
              <SplideSlide>
                <img src="/image/photo.png" alt="Image 3" />
              </SplideSlide>
            </Splide>
          </div>
          <div className={s.sliderThumbnails}>
            <Splide options={thumbsOptions} ref={thumbnailSlider}>
              <SplideSlide>
                <img src="/image/photo.png" alt="Image 1" />
              </SplideSlide>
              <SplideSlide>
                <img src="/image/photo.png" alt="Image 2" />
              </SplideSlide>
              <SplideSlide>
                <img src="/image/photo.png" alt="Image 3" />
              </SplideSlide>
              <SplideSlide>
                <img src="/image/photo.png" alt="Image 1" />
              </SplideSlide>
              <SplideSlide>
                <img src="/image/photo.png" alt="Image 2" />
              </SplideSlide>
              <SplideSlide>
                <img src="/image/photo.png" alt="Image 3" />
              </SplideSlide>
            </Splide>
          </div>
        </div>
        <div className={s.info}>
          <p className={s.price}>{"5000".toLocaleString()}&nbsp;₽</p>
          <p className={s.article}>арт. 84348945757</p>
          <div className={s.characteristics}>
            <h3>Общие характеристики</h3>
          </div>
        </div>
      </Container>
    </section>
  );
};
