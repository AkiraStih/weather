// store/weather.store.ts
import { create } from "zustand";
import { getRealtimeWeather } from "../api/weather.client";
import type { RealtimeWeather } from "../api/weather.schema";

type TemperatureUnit = "C" | "F";

type WeatherState = {
  data: RealtimeWeather | null;
  status: "idle" | "loading" | "success" | "error";
  error: string | null;
  lastQuery: string | null;
  unit: TemperatureUnit;

  fetchWeather: (city: string) => Promise<void>;
  toggleUnit: () => void;
  reset: () => void;
};

export const useWeatherStore = create<WeatherState>((set) => ({
  data: null,
  status: "idle",
  error: null,
  lastQuery: null,
  unit: "C",

  fetchWeather: async (city: string) => {
    set({ status: "loading", error: null });
    try {
      const data = await getRealtimeWeather(city);
      set({ data, status: "success", lastQuery: city });
    } catch (e) {
      const message = e instanceof Error ? e.message : "Не удалось получить погоду";
      set({ status: "error", error: message });
    }
  },

  toggleUnit: () =>
    set((s) => ({ unit: s.unit === "C" ? "F" : "C" })),

  reset: () => set({ data: null, status: "idle", error: null }),
}));