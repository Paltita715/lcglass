import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"

const HeroSlider = () => {
  return (
    <Splide
      hasTrack={false}
      aria-label="Carrusel principal"
      className="h-dvh w-full"
      options={{
        type: "fade",
        rewind: true,
        interval: 5000,
        speed: 300,
        autoplay: true,
        arrows: false,
        pagination: false,
      }}
    >
      <SplideTrack className="h-full w-full">
        <SplideSlide>
          <img
            src="/hero-slider01.jpeg"
            alt=""
            className="h-full w-full object-cover object-top"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="/hero-slider02.jpeg"
            alt=""
            className="h-full w-full object-cover"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="/hero-slider03.jpeg"
            alt=""
            className="h-full w-full object-cover"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="/hero-slider04.jpeg"
            alt=""
            className="h-full w-full object-cover"
          />
        </SplideSlide>
      </SplideTrack>
    </Splide>
  )
}

export default HeroSlider
