import { useActiveCity, useWeatherStore } from '@/store/weather.store';
import { getWeatherIcon } from '@/utils/getWeatherIcon';

export function OtherCitiesCard() {
  const cities = useWeatherStore((s) => s.cities);
  const setActiveCity = useWeatherStore((s) => s.setActiveCity);
  const active = useActiveCity();
  const removeCity = useWeatherStore((s) => s.removeCity);
  const others = cities.filter((c) => c.id !== active?.id);
  if (others.length === 0) return null;

  return (
    <div className="rounded-2xl bg-[#1E1E1E] p-4">
      <h3 className="mb-3 font-semibold">Other Cities</h3>
      <div className="flex flex-col gap-2">
        {others.map((city) => (
          <div
            key={city.id}
            onClick={() => setActiveCity(city.id)}
            className="flex cursor-pointer items-center justify-between rounded-xl bg-[#2A2A2A] p-3 hover:bg-[#3A3A3A]"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex items-center gap-2">
                <img
                  src={getWeatherIcon(
                    city.data.current.condition.code,
                    city.data.current.is_day,
                  )}
                  className="h-8 w-8"
                />
                <span>{city.data.location.name}</span>
              </div>
              <span>{Math.round(city.data.current.temp_c)}°</span>
            </div>
            <button className=''
              onClick={(e) => {
                e.stopPropagation();
                removeCity(city.id);
              }}
            >
              ❌
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
