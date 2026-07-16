import { z } from 'zod';

export const conditionSchema = z.object({
  text: z.string(),
  code: z.number(),
});
export const locationSchema = z.object({
  name: z.string(),
  country: z.string(),
  region: z.string(),
  localtime: z.string()
});

export const currentSchema = z.object({
  temp_c: z.number(),
  feelslike_c: z.number(),
  humidity: z.number(),
  condition: conditionSchema,
});

export const realtimeWeatherSchema = z.object({
  location: locationSchema,
  current: currentSchema,
});

export type RealtimeWeather = z.infer<typeof realtimeWeatherSchema>;
