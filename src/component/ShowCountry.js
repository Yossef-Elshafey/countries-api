import { Link } from "react-router-dom";

export default function ShowCountry({ target }) {
  function firstKey(obj) {
    return Object.values(obj)[0];
  }
  function checkForValue(obj) {
    return obj ? true : false;
  }

  return (
    <section className="min-h-[100vh]  bg-slate-900 xl:pt-8">
      {target.map((item) => {
        return (
          <div
            key={item.name.common}
            className="container mx-auto p-8 xl:p-0 xl:grid xl:grid-cols-2 xl:gap-x-16"
          >
            <Link
              to={"/"}
              className="grid-none bg-slate-800 py-2 px-4 rounded-md text-white  "
            >
              Back
            </Link>
            <img
              src={item.flags && item.flags.svg}
              alt=""
              className="w-auto h-auto"
            />
            <div className="flex flex-col xl:justify-between xl:flex-row gap-4 mt-6 xl:items-center ">
              <div className="flex flex-col gap-y-2 text-start text-white">
                <h2 className="text-start text-2xl font-bold  ">
                  {item.name.common}
                </h2>
                <p>
                  Native Name :
                  <span className="text-gray-500 ml-2">
                    {checkForValue(item.name.nativeName) &&
                      firstKey(item.name.nativeName).common}
                  </span>
                </p>
                <p>
                  Population:
                  <span className="text-gray-500 ml-2">
                    {checkForValue(item.population) && item.population}
                  </span>
                </p>
                <p>
                  Region:
                  <span className="text-gray-500 ml-2">
                    {checkForValue(item.region) && item.region}
                  </span>
                </p>
                <p>
                  Sub Region:
                  <span className="text-gray-500 ml-2">
                    {checkForValue(item.subregion) && item.subregion}
                  </span>
                </p>
                <p>
                  Capital:
                  <span className="text-gray-500 ml-2">
                    {checkForValue(item.capital) && item.capital}
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-y-2 text-start text-white">
                <p>
                  Currencies:
                  <span className="text-gray-500 ml-2">
                    {checkForValue(item.currencies) &&
                      firstKey(item.currencies).name}
                  </span>
                </p>
                <p>
                  Languages:
                  <span className="text-gray-500 ml-2">
                    {checkForValue(item.languages) && firstKey(item.languages)}
                  </span>
                </p>
                <p className="text-start mt-2 flex items-center max-w-full flex-wrap gap-y-2">
                  Borders:
                  {checkForValue(item.borders) &&
                    item.borders.map((e, i) => (
                      <span
                        key={i}
                        className=" py-2 px-4 bg-slate-800 mx-2 rounded-md"
                      >
                        {e}
                      </span>
                    ))}
                </p>
              </div>
            </div>
          </div>
        );
      })}

    </section>
  );
}
