import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide"
import "@splidejs/react-splide/css"

const ProyectsSlider = () => {
  return (
    <Splide
      hasTrack={false}
      aria-label="Carrusel de proyectos"
      className="basis-1/2"
      options={{
        type: "fade",
        pagination: false,
        rewind: true,
      }}
    >
      <SplideTrack className="h-full w-full">
        <SplideSlide>
          <img
            src="/proy01.jpeg"
            alt="Proyecto 1"
            className="w-full h-full object-cover"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="/proy02.jpeg"
            alt="Proyecto 2"
            className="w-full h-full object-cover"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="/proy03.jpeg"
            alt="Proyecto 3"
            className="w-full h-full object-cover"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="/proy04.jpeg"
            alt="Proyecto 4"
            className="w-full h-full object-cover"
          />
        </SplideSlide>
      </SplideTrack>
      <div className="splide__arrows">
        <button
          className="splide__arrow splide__arrow--prev"
          style={{
            background: "#021E3B",
            display: "flex",
            alignItems: "center",
            border: "0px",
            borderRadius: "3px",
            cursor: "pointer",
            height: "2em",
            justifyContent: "center",
            opacity: 1,
            padding: "0px",
            position: "absolute",
            top: "95%",
            transform: "translateY(-50%)",
            width: "2em",
            zIndex: 1,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              fill="#fff"
              d="M10.586 3l-6.586 6.586a2 2 0 0 0 -.434 2.18l.068 .145a2 2 0 0 0 1.78 1.089h2.586v7a2 2 0 0 0 2 2h4l.15 -.005a2 2 0 0 0 1.85 -1.995l-.001 -7h2.587a2 2 0 0 0 1.414 -3.414l-6.586 -6.586a2 2 0 0 0 -2.828 0z"
            />
          </svg>
        </button>
        <button
          className="splide__arrow splide__arrow--next"
          style={{
            background: "#021E3B",
            display: "flex",
            alignItems: "center",
            border: "0px",
            borderRadius: "3px",
            cursor: "pointer",
            height: "2em",
            justifyContent: "center",
            opacity: 1,
            padding: "0px",
            position: "absolute",
            left: "4em",
            top: "95%",
            transform: "translateY(-50%)",
            width: "2em",
            zIndex: "1",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              fill="#fff"
              d="M10 2l-.15 .005a2 2 0 0 0 -1.85 1.995v6.999l-2.586 .001a2 2 0 0 0 -1.414 3.414l6.586 6.586a2 2 0 0 0 2.828 0l6.586 -6.586a2 2 0 0 0 .434 -2.18l-.068 -.145a2 2 0 0 0 -1.78 -1.089l-2.586 -.001v-6.999a2 2 0 0 0 -2 -2h-4z"
            />
          </svg>
        </button>
      </div>
    </Splide>
  )
}

export default ProyectsSlider
