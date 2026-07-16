import axios from "axios";
import { forecastWeatherSchema, type ForecastWeather } from "./weather.schema";

const api = axios.create({
  baseURL: "https://api.weatherapi.com/v1",
  params: { key: import.meta.env.VITE_WEATHER_API_KEY },
});

export async function getWeatherByQuery(q: string): Promise<ForecastWeather> {
  const { data } = await api.get("/forecast.json", {
    params: { q, days: 10, aqi: "no", alerts: "no" },
  });
  return forecastWeatherSchema.parse(data);
}