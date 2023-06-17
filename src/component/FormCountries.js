import { useState } from "react";

import RenderCountries from "./RenderCountries";
export default function FormCountries({ data }) {
  const [select, setSelect] = useState("");
  const [search, setSearch] = useState("");

  function getValues(e, targetVar) {
    targetVar(e.target.value);
  }

  return (
    <section className="bg-slate-800 min-h-[100dvh]">
      <div className="container mx-auto ">
        <form
          className="flex flex-col gap-y-2 xl:flex-row xl:items-center xl:justify-between py-8 px-2 xl:px-0"
          name="sort-countries"
        >
          <input
            onChange={(e) => getValues(e, setSearch)}
            type="search"
            name="search-country"
            placeholder="Search For Country"
            className=" p-2 bg-slate-900 text-white border-b-2 xl:max-w-[33%] xl:flex-1 rounded-xl "
          />
          <select
            onChange={(e) => getValues(e, setSelect)}
            name="sort region"
            className="bg-slate-900 p-2 text-white focus-visible:border focus-visible:outline-none self-start xl:self-auto"
          >
            <option value="">Filter by region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </form>
      </div>
      {data !== undefined ? (
        <RenderCountries data={data} selected={select} searched={search} />
      ) : null}
    </section>
  );
}
