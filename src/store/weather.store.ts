import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getWeatherByQuery } from "@api/weather.client";
import type { ForecastWeather } from "@api/weather.schema";

type City = {
  id: string; 
  query: string; 
  isCurrentLocation: boolean;
  data: ForecastWeather;
};

type Settings = {
  showSunset: boolean;
  showHumidity: boolean;
  showFeelsLike: boolean;
};

type WeatherState = {
  cities: City[];
  activeCityId: string | null;
  status: "idle" | "loading" | "error" | "success";
  error: string | null;
  unit: "C" | "F";
  settings: Settings;

  fetchCurrentLocation: () => Promise<void>;
  addCity: (query: string) => Promise<void>;
  removeCity: (id: string) => void;
  setActiveCity: (id: string) => void;
  toggleUnit: () => void;
  updateSettings: (patch: Partial<Settings>) => void;
};

function makeId(data: ForecastWeather) {
  return `${data.location.lat}_${data.location.lon}`;
}

export const useWeatherStore = create<WeatherState>()(
  persist(
    (set) => ({
      cities: [],
      activeCityId: null,
      status: "idle",
      error: null,
      unit: "C",
      settings: {
        showSunset: true,
        showHumidity: true,
        showFeelsLike: true,
      },

      fetchCurrentLocation: async () => {
        set({ status: "loading", error: null });

        if (!("geolocation" in navigator)) {
          set({ status: "error", error: "Геолокация не поддерживается браузером" });
          return;
        }
      },

      addCity: async (query: string) => {
        set({ status: "loading", error: null });
        try {
          const data = await getWeatherByQuery(query);
          const id = makeId(data);

          set((s) => {
            const exists = s.cities.some((c) => c.id === id);
            const cities = exists
              ? s.cities
              : [...s.cities, { id, query, isCurrentLocation: false, data }];
            return { cities, activeCityId: id, status: "success" };
          });
        } catch (e) {
          set({ status: "error", error: "Город не найден" });
        }
      },

      removeCity: (id: string) => {
        set((s) => {
          const cities = s.cities.filter((c) => c.id !== id);
          const activeCityId =
            s.activeCityId === id ? (cities[0]?.id ?? null) : s.activeCityId;
          return { cities, activeCityId };
        });
      },

      setActiveCity: (id: string) => set({ activeCityId: id }),

      toggleUnit: () => set((s) => ({ unit: s.unit === "C" ? "F" : "C" })),

      updateSettings: (patch) =>
        set((s) => ({ settings: { ...s.settings, ...patch } })),
    }),
    {
      name: "weather-storage", // ключ в localStorage
      partialize: (s) => ({
        cities: s.cities,
        activeCityId: s.activeCityId,
        unit: s.unit,
        settings: s.settings,
      }),
    }
  )
);

// селектор-хелпер, чтобы не писать .find() в каждом компоненте
export function useActiveCity() {
  return useWeatherStore((s) => s.cities.find((c) => c.id === s.activeCityId) ?? null);
}