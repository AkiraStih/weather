import { SearchBar } from '@components/SearchBar';
import CurrentWheaterCard from '@components/weather/CurrentWeatherCard';

function App() {
  return (
    <>
      <button className="p-4 text-lg">Click</button>
      <SearchBar />
      <CurrentWheaterCard />
    </>
  );
}

export default App;
