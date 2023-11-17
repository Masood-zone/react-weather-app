import axios from "axios";
import { API_KEY } from "./root";

export default async function getCityWeather(country) {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${API_KEY}&units=metric`
  );
  if (response.ok) {
    return response.data;
  }
  console.log(response.data);
}
