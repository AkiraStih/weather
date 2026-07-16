import day from '@/assets/weather/day.svg';
import night from '@/assets/weather/night.svg';
import cloudy from '@/assets/weather/cloudy.svg';
import cloudyDay2 from '@/assets/weather/cloudy-day-2.svg';
import cloudyDay3 from '@/assets/weather/cloudy-day-3.svg';
import cloudyNight2 from '@/assets/weather/cloudy-night-2.svg';
import cloudyNight3 from '@/assets/weather/cloudy-night-3.svg';
import rainy1 from '@/assets/weather/rainy-1.svg';
import rainy2 from '@/assets/weather/rainy-2.svg';
import rainy3 from '@/assets/weather/rainy-3.svg';
import rainy5 from '@/assets/weather/rainy-5.svg';
import rainy7 from '@/assets/weather/rainy-7.svg';
import snowy1 from '@/assets/weather/snowy-1.svg';
import snowy2 from '@/assets/weather/snowy-2.svg';
import snowy3 from '@/assets/weather/snowy-3.svg';
import snowy4 from '@/assets/weather/snowy-4.svg';
import snowy5 from '@/assets/weather/snowy-5.svg';
import snowy6 from '@/assets/weather/snowy-6.svg';
import thunder from '@/assets/weather/thunder.svg';

export function getWeatherIcon(code: number, isDay: boolean): string {
  // ясно
  if (code === 1000) return isDay ? day : night;

  // облачно/переменная облачность
  if (code === 1003) return isDay ? cloudyDay2 : cloudyNight2;
  if (code === 1006) return isDay ? cloudyDay3 : cloudyNight3; 
  if (code === 1009) return cloudy; 

  if ([1030, 1135, 1147].includes(code)) return cloudy;

  // гроза — всегда свой значок, день/ночь не делим
  if (code === 1087 || (code >= 1273 && code <= 1282)) return thunder;

  // снег — по интенсивности
  if ([1210, 1213].includes(code)) return snowy1; 
  if ([1216, 1219].includes(code)) return snowy3; 
  if ([1222, 1225].includes(code)) return snowy5; 
  if ([1255].includes(code)) return snowy2; 
  if ([1258].includes(code)) return snowy6; 
  if ([1204, 1207, 1237, 1249, 1252, 1261, 1264].includes(code)) return snowy4; 

  // дождь — по интенсивности
  if ([1063, 1150, 1153, 1180, 1183].includes(code)) return rainy1; 
  if ([1186, 1189, 1240].includes(code)) return rainy3; 
  if ([1192, 1195, 1243].includes(code)) return rainy5; 
  if ([1246].includes(code)) return rainy7; 
  if ([1168, 1171, 1198, 1201].includes(code)) return rainy2; 

  return cloudy;
}
