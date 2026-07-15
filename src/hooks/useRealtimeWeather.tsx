import { useEffect, useState } from 'react';
import { getRealtimeWeather } from '@api/weather.client';
import type { RealtimeWeather } from '@api/weather.schema';
import { ZodError } from 'zod';

function useRealtimeWeather(city: string) {
  const [data, setData] = useState<RealtimeWeather | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getRealtimeWeather(city)
      .then(setData)
      .catch((e) => setError(e instanceof ZodError ? e.message : 'Unknown error'));
  }, [city]);

  return { data, error };
}

export default useRealtimeWeather;
