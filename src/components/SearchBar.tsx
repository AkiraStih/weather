import { useState } from "react";
import { useWeatherStore } from "@/store/weather.store";

export function SearchBar() {
  const [city, setCity] = useState("");
  const fetchWeather = useWeatherStore((s) => s.fetchWeather);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (city.trim()) fetchWeather(city.trim());
      }}
    >
      <input value={city} onChange={(e) => setCity(e.target.value)} />
      <button type="submit">Найти</button>
    </form>
  );
}