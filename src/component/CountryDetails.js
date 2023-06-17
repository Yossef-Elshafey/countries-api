import { useState } from "react";
import { useParams } from "react-router-dom";
import ShowCountry from "./ShowCountry";

export default function CountryDetails({ data }) {
  const { countryName } = useParams();

  const targetCountry = useState(
    data.filter((e) => {
      return e.name.common.toLowerCase() === countryName;
    })
  );
  return <ShowCountry target={targetCountry[0]} />;
}
