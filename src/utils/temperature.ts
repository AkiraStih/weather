import type { ForecastWeather } from "@/api/weather.schema";

type Unit = "C" | "F";

export function getTemp(current: ForecastWeather["current"], unit: Unit) {
  return unit === "C" ? current.temp_c : current.temp_f;
}

export function getFeelsLike(current: ForecastWeather["current"], unit: Unit) {
  return unit === "C" ? current.feelslike_c : current.feelslike_f;
}