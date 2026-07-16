import { z } from 'zod';

export const conditionSchema = z.object({
  text: z.string(),
  code: z.number(),
});

export const locationSchema = z.object({
  name: z.string(),
  region: z.string(),
  country: z.string(),
  lat: z.number(),
  lon: z.number(),
  tz_id: z.string(),
  localtime: z.string(),
});

export const currentSchema = z.object({
  temp_c: z.number(),
  temp_f: z.number(),
  is_day: z.number().transform((v) => v === 1),
  condition: conditionSchema,
  humidity: z.number(),
  feelslike_c: z.number(),
  feelslike_f: z.number(),
  wind_kph: z.number(),
  uv: z.number(),
  vis_km: z.number(),
});

export const astroSchema = z.object({
  sunrise: z.string(),
  sunset: z.string(),
});

export const dayForecastSchema = z.object({
  date: z.string(),
  day: z.object({
    maxtemp_c: z.number(),
    mintemp_c: z.number(),
    condition: conditionSchema,
  }),
  astro: astroSchema,
});

export const forecastWeatherSchema = z.object({
  location: locationSchema,
  current: currentSchema,
  forecast: z.object({
    forecastday: z.array(dayForecastSchema),
  }),
});

export type ForecastWeather = z.infer<typeof forecastWeatherSchema>;
