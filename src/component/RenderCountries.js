import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function RenderCountries({ selected, searched, data }) {
  // Animation on scroll

  useEffect(() => {
    const observer = new IntersectionObserver((entries) =>
      entries.forEach(
        (entry) => {
          entry.target.classList.toggle(
            "xl:animate-scrolling",
            entry.isIntersecting
          );
        },
        { threshold: 1 }
      )
    );
    const boxes = document.querySelectorAll(".box-observer");
    boxes.forEach((box) => {
      observer.observe(box);
    });
  }, []);

  //

  return (
    <>
      <div className="container mx-auto grid gap-4  sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 p-4 sm:p-0  ">
        {data
          .filter((item) => {
            return selected === ""
              ? item
              : item.region.toLowerCase().includes(selected);
          })

          .filter((item) => {
            return searched === ""
              ? item
              : item.name.common.toLowerCase().includes(searched);
          })
          .map((item) => {
            return (
              <Link
                to={item.name.common.toLowerCase()}
                key={item.name.common}
                className="box-observer min-h-fit hover:-translate-y-2 transition-transform"
              >
                <img
                  src={item.flags.svg}
                  alt=""
                  className="lg:min-h-[60%] lg:max-h-[60%] w-full"
                />
                <div className=" p-2 bg-slate-900">
                  <h2 className="text-white text-center mb-2">
                    {item.name.common}
                  </h2>
                  <p className="text-white">Population : {item.population}</p>
                  <p className="text-white">Region : {item.region}</p>
                  <p className="text-white">Capital : {item.capital}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}
