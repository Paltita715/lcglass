import { Splide, SplideSlide } from "@splidejs/react-splide"
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll"
import "@splidejs/react-splide/css"

const InfiniteCarousel = () => {
  return (
    <Splide
      className="bg-red-300"
      options={{
        type: "loop",
        gap: "1rem",
        // drag: "free",
        // arrows: false,
        // pagination: false,
        // perPage: 3,
        height: "10rem",
        // autoWidth: true,
        autoScroll: {
          pauseOnHover: false,
          pauseOnFocus: false,
          speed: 1.5,
        },
      }}
      extensions={{ AutoScroll }}
    >
      <SplideSlide className="w-fit bg-blue-500">
        <img src="/clientes/cli02.png" alt="Cliente" className="" />
      </SplideSlide>
      <SplideSlide className="w-fit bg-blue-500">
        <img src="/clientes/cli03.png" alt="Cliente" className="" />
      </SplideSlide>
      <SplideSlide className="w-fit bg-blue-500">
        <img src="/clientes/cli04.svg" alt="Cliente" className="" />
      </SplideSlide>
      <SplideSlide className="w-fit bg-blue-500">
        <img src="/clientes/cli06.png" alt="Cliente" className="" />
      </SplideSlide>
      <SplideSlide className="w-fit bg-blue-500">
        <img src="/clientes/cli07.webp" alt="Cliente" className="" />
      </SplideSlide>
      <SplideSlide className="w-fit bg-blue-500">
        <img src="/clientes/cli08.png" alt="Cliente" className="" />
      </SplideSlide>
    </Splide>
  )
}

export default InfiniteCarousel
