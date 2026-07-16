import { useActiveCity } from "@/store/weather.store";

export function HighlightsCard() {
  const city = useActiveCity();
  if (!city) return null;

  const { current, forecast } = city.data;
  const today = forecast.forecastday[0];

  return (
    <div className="rounded-2xl bg-[#1E1E1E] p-4">
      <h3 className="mb-3 font-semibold">Today's Highlight</h3>
      <div className="grid grid-cols-2 gap-3">
        <Stat label="Wind Status" value={`${current.wind_kph} km/h`} />
        <Stat label="Humidity" value={`${current.humidity} %`} />
        <Stat label="UV Index" value={`${current.uv} uv`} />
        <Stat label="Visibility" value={`${current.vis_km} km`} />
        {today && (
          <>
            <Stat label="Sunrise" value={today.astro.sunrise} />
            <Stat label="Sunset" value={today.astro.sunset} />
          </>
        )}
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[#2A2A2A] p-3">
      <p className="text-xs text-gray-400">{label}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}