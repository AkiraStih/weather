import { SideBar } from "@components/layouts/SideBar";
import { Header } from "@components//layouts/Header";
import { WeatherCard } from "@/components/weather/CurrentWeatherCard";
import { OtherCitiesCard } from "@/components/weather/OtherCitiesCard";
import { HighlightsCard } from "@/components/weather/HighlightsCard";
import { ForecastCard } from "@/components/weather/ForecastCard";

function App() {
  return (
    <div className="flex min-h-screen bg-[#141414] text-white">
      <SideBar />

      <main className="flex-1 p-6">
        <Header />

        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="col-span-2 flex flex-col gap-4">
            <WeatherCard />
            <OtherCitiesCard />
          </div>

          <div className="col-span-1 flex flex-col gap-4">
            <HighlightsCard />
            <ForecastCard />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;