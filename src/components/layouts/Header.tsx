import { SearchBar } from '@/components/SearchBar';
import { useWeatherStore } from '@/store/weather.store';

export function Header() {
  const unit = useWeatherStore((s) => s.unit);
  const toggleUnit = useWeatherStore((s) => s.toggleUnit);

  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-400">Hi, User</p>
        <h1 className="text-2xl font-bold">Good Morning</h1>
      </div>

      <div className="flex items-center gap-3">
        <SearchBar />
        <button
          type="button"
          onClick={toggleUnit}
          className="rounded-full bg-[#2A2A2A] px-3 py-2 text-sm hover:bg-[#3A3A3A]"
        >
          {unit}°
        </button>
      </div>
    </div>
  );
}
