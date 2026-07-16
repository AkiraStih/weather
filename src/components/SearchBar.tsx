import { useState } from 'react';
import { useWeatherStore } from '@/store/weather.store';

export function SearchBar() {
  const [city, setCity] = useState('');
  const addCity = useWeatherStore((s) => s.addCity);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (city.trim()) {
          addCity(city.trim());
          setCity('');
        }
      }}
      className="flex w-139 items-center gap-3 rounded-full bg-[#2A2A2A] px-5 py-3"
    >
      <SearchIcon />
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Search your location"
        className="w-full bg-transparent text-sm text-white placeholder-gray-500 outline-none"
      />
      <button type="submit" className="sr-only">
        Найти
      </button>
    </form>
  );
}
function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 text-gray-500"
    >
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
      <path
        d="M21 21L16.65 16.65"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
