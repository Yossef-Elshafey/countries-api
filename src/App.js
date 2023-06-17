import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import FromCountries from "./component/FormCountries";
import { useEffect, useState } from "react";
import CountryDetails from "./component/CountryDetails";

function App() {
  const [data, setData] = useState();
  const data_url = "https://restcountries.com/v3.1/all";
  useEffect(() => {
    fetch(data_url)
      .then((response) => response.json())
      .then((response) => setData(response));
  }, []);

  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/countries-api" element={<FromCountries data={data} />} />
        <Route
          path="countries-api/:countryName"
          element={data !== undefined ? <CountryDetails data={data} /> : null}
        />
      </Routes>
    </main>
  );
}

export default App;
