import axios from 'axios';
import { realtimeWeatherSchema, type RealtimeWeather } from './weather.schema';

const api = axios.create({
  baseURL: 'https://api.weatherapi.com/v1',
  params: {
    key: import.meta.env.VITE_WEATHER_API_KEY,
  },
});

export async function getRealtimeWeather(q: string): Promise<RealtimeWeather> {
  const { data } = await api.get('/current.json', { params: { q } });
  return realtimeWeatherSchema.parse(data);
}
