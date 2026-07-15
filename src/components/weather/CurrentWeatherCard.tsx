import useRealtimeWeather from '@/hooks/useRealtimeWeather';

export default function CurrentWheaterCard() {
  const { data, error } = useRealtimeWeather('London');
  console.log(`${data} дата`)
  return (
    <>
      <div>{data?.current.temp_c}</div>
      { error && <div>{error}</div>}
    </>
  );
}
