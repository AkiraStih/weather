import { useActiveCity, useWeatherStore } from "@/store/weather.store";
import { getWeatherIcon } from "@/utils/getWeatherIcon";

export function ForecastCard() {
  const city = useActiveCity();
  const unit = useWeatherStore((s) => s.unit);
  if (!city) return null;

  return (
    <div className="rounded-2xl bg-[#1E1E1E] p-4">
      <h3 className="mb-3 font-semibold">Forecast</h3>
      <div className="flex gap-2 overflow-x-auto">
        {city.data.forecast.forecastday.map((day, i) => (
          <div key={day.date} className="flex min-w-16 flex-col items-center gap-2 rounded-xl bg-[#2A2A2A] p-3">
            <p className="text-xs text-gray-400">
              {i === 0 ? "Today" : new Date(day.date).toLocaleDateString("en-US", { weekday: "short" })}
            </p>
            <img src={getWeatherIcon(day.day.condition.code, true)} className="h-8 w-8" />
            <p className="text-sm font-semibold">
              {Math.round(unit === "C" ? day.day.maxtemp_c : day.day.maxtemp_c * 9/5 + 32)}°
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}