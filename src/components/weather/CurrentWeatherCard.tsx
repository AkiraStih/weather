import { useActiveCity, useWeatherStore } from '@/store/weather.store';
import { getWeatherIcon } from '@/utils/getWeatherIcon';
import { getTemp } from '@/utils/temperature';
import cloudy from '@/assets/weather/cloudy.svg';

export function WeatherCard() {
  const city = useActiveCity();
  const unit = useWeatherStore((s) => s.unit);
  const status = useWeatherStore((s) => s.status);

   if (status === 'loading') {
    return (
      <div className="flex h-56 items-center justify-center rounded-2xl bg-[#1E1E1E] p-6">
        <img src={cloudy} alt="" />
      </div>
    );
  }

  if (!city) return <div className="rounded-2xl bg-[#1E1E1E] p-6">Добавьте город</div>;

  const { current, location, forecast } = city.data;
  const today = forecast.forecastday[0];
  const temp = Math.round(getTemp(current, unit));

  const dateLabel = new Date(location.localtime).toLocaleDateString('en-US', {
    weekday: 'long',
  });

  return (
    <div className="rounded-2xl bg-[#1E1E1E] p-6">
      <div className="flex items-center gap-2 text-sm text-gray-400">
        <LocationIcon /> {location.name}, {location.country}
      </div>

      <div className="mt-4 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">{dateLabel}</h2>
          <p className="text-sm text-gray-400">{location.localtime.split(' ')[0]}</p>
        </div>

        <div className="text-right">
          <p className="text-4xl font-bold">
            {temp}°{unit}
          </p>
          {today && (
            <p className="text-sm text-gray-400">
              {Math.round(today.day.maxtemp_c)}° / {Math.round(today.day.mintemp_c)}°
            </p>
          )}
        </div>
      </div>

      <div className="mt-4 flex items-center gap-3">
        <img
          src={getWeatherIcon(current.condition.code, current.is_day)}
          className="h-16 w-16"
        />
        <div>
          <p className="font-semibold">{current.condition.text}</p>
          <p className="text-sm text-gray-400">
            Feels like {Math.round(current.feelslike_c)}°
          </p>
        </div>
      </div>
    </div>
  );
}
function LocationIcon() {
  return (
    <svg
      width="17"
      height="20"
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0005 8.39941C12.0005 9.35419 11.6212 10.2699 10.9461 10.945C10.271 11.6201 9.3553 11.9994 8.40052 11.9994C7.44574 11.9994 6.53007 11.6201 5.85494 10.945C5.17981 10.2699 4.80052 9.35419 4.80052 8.39941C4.80052 7.44463 5.17981 6.52895 5.85494 5.85382C6.53007 5.17869 7.44574 4.79941 8.40052 4.79941C9.3553 4.79941 10.271 5.17869 10.9461 5.85382C11.6212 6.52895 12.0005 7.44463 12.0005 8.39941ZM10.8005 8.39941C10.8005 7.76289 10.5477 7.15244 10.0976 6.70235C9.64749 6.25226 9.03704 5.99941 8.40052 5.99941C7.764 5.99941 7.15355 6.25226 6.70347 6.70235C6.25338 7.15244 6.00052 7.76289 6.00052 8.39941C6.00052 9.03593 6.25338 9.64637 6.70347 10.0965C7.15355 10.5465 7.764 10.7994 8.40052 10.7994C9.03704 10.7994 9.64749 10.5465 10.0976 10.0965C10.5477 9.64637 10.8005 9.03593 10.8005 8.39941ZM14.3405 14.3454C15.916 12.7691 16.801 10.6317 16.801 8.40301C16.801 6.17435 15.916 4.03691 14.3405 2.46061C13.5605 1.6805 12.6345 1.06169 11.6153 0.639494C10.5961 0.217301 9.5037 0 8.40052 0C7.29735 0 6.20497 0.217301 5.18578 0.639494C4.16659 1.06169 3.24055 1.6805 2.46052 2.46061C0.885032 4.03691 0 6.17435 0 8.40301C0 10.6317 0.885032 12.7691 2.46052 14.3454L4.28572 16.1442L6.73732 18.5262L6.89692 18.6678C7.82692 19.4214 9.18892 19.3734 10.0649 18.5262L12.9869 15.6822L14.3405 14.3454ZM3.30652 3.30661C3.97521 2.63718 4.76928 2.10611 5.64335 1.74378C6.51742 1.38144 7.45433 1.19494 8.40052 1.19494C9.34671 1.19494 10.2836 1.38144 11.1577 1.74378C12.0318 2.10611 12.8258 2.63718 13.4945 3.30661C14.8076 4.62144 15.5626 6.39238 15.6019 8.25021C15.6413 10.108 14.962 11.9094 13.7057 13.2786L13.4945 13.4994L11.9093 15.0642L9.23332 17.667L9.12052 17.763C8.91268 17.9186 8.65997 18.0026 8.40032 18.0024C8.14068 18.0022 7.88811 17.9178 7.68052 17.7618L7.56892 17.6658L3.99292 14.1798L3.30652 13.4994L3.09532 13.2798C1.83905 11.9106 1.15978 10.1092 1.19913 8.25141C1.23848 6.39358 1.99341 4.62144 3.30652 3.30661Z"
        fill="white"
      />
    </svg>
  );
}
