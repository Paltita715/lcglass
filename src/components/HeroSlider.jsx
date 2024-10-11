import { useEffect, useState } from "react"
import "@splidejs/react-splide/css"

const HeroSlider = () => {
  const [SplideComponents, setSplideComponents] = useState(null)

  useEffect(() => {
    import("@splidejs/react-splide").then((module) => {
      setSplideComponents({
        Splide: module.Splide,
        SplideTrack: module.SplideTrack,
        SplideSlide: module.SplideSlide,
      })
    })
  }, [])

  if (!SplideComponents) {
    return (
      <img
        src="/hero-slider01.jpeg"
        alt="Imagen estática de carga"
        className="h-dvh w-full object-cover object-top opacity-30"
      />
    )
  }

  const { Splide, SplideTrack, SplideSlide } = SplideComponents

  return (
    <Splide
      hasTrack={false}
      aria-label="Carrusel principal"
      className="h-dvh w-full opacity-30"
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
