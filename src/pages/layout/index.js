import React, { useReducer, useState } from "react";
import sunrise from "../../assets/svgs/sunrise.svg";
import wind from "../../assets/svgs/wind.svg";
import temp from "../../assets/svgs/temp.svg";
import { MdOutlineLocationSearching } from "react-icons/md";
import getCityWeather from "../../root/getCityDetails";

const initialCountryInfo = {
  countryDetails: [],
  error: null,
  loading: true,
};

async function countryReducer(state, action) {
  switch (action.type) {
    case "get-country-info":
      const response = await getCityWeather(action.query);
      return {
        ...state,
        countryDetails: [...state.countryDetails, response],
        loading: false,
      };
    default:
      break;
  }
}

function MainApp() {
  const [country, dispatch] = useReducer(countryReducer, initialCountryInfo);
  const [query, setQeury] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "get-country-info", query: query });
    setQeury("");
  };
  return (
    <div className="max-w-lg h-[60%]  mx-auto flex flex-col items-center my-5 ">
      <header className="flex flex-col items-center justify-center py-3">
        <h1 className="leading-3 tracking-wide font-bold uppercase text-3xl mb-4 ">
          Ghana
        </h1>
        <span className="uppercase text-neutral-500 tracking-widest">
          Sunday 6:30PM
        </span>
      </header>
      <section className="flex flex-col items-center justify-center my-1">
        <figure className="w-44 h-44">
          <img src={wind} alt="Weather Icon" className="w-full h-full" />
        </figure>
        <div className="flex flex-col items-center py-5">
          <span className="text-5xl">24°C</span>
          <span className="text-neutral-500 uppercase">Ghana</span>
        </div>
      </section>
      <section className="flex items-center gap-5 flex-1">
        <div className="flex w-36 h-32 items-center flex-col justify-center">
          <img src={sunrise} alt="Sunrise" />
          <span>Sunrise</span>
          <span>6:00</span>
        </div>
        <div className="flex w-36 h-32 items-center flex-col justify-center">
          <img src={wind} alt="Wind" />
          <span>Wind</span>
          <span>4m/s</span>
        </div>
        <div className="flex w-36 h-32 items-center flex-col justify-center">
          <img src={temp} alt="Temperature" />
          <span>Temperature</span>
          <span>10°</span>
        </div>
      </section>
      <form onSubmit={handleSubmit} className="my-3 w-[75%] relative">
        <button type="submit" className="absolute btn btn-square right-0 top-0">
          <MdOutlineLocationSearching fontSize={25} />
        </button>
        <input
          type="text"
          placeholder="Type country name here"
          value={query}
          onChange={(e) => setQeury(e.target.value)}
          className="input input-bordered w-full max-w-sm"
        />
      </form>
    </div>
  );
}

export default MainApp;
