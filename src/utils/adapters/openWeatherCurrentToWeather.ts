import { OpenWeatherCurrentDTO } from '@/interfaces/DTO/OpenWeatherCurrentDTO';
import { Nullable } from '@/interfaces/base/Nullable';
import { CurrentWeather } from '@/interfaces/weather-widget/CurrentWeather';
import { isObjectEmpty } from '@/utils/base/isObjectEmpty';
import { WeatherIconDictionary } from '@/utils/dictionaries/WeatherIconDictionary';

export const openWeatherCurrentToWeather = (
  currentWeather: OpenWeatherCurrentDTO,
): Nullable<CurrentWeather> => {
  if (isObjectEmpty(currentWeather)) return null;

  const { weather, wind, main, visibility, name, sys } = currentWeather;

  return {
    place: {
      city: name,
      country: sys?.country,
    },
    temperature: {
      icon: WeatherIconDictionary[weather[0]?.icon] ?? '',
      value: `${main?.temp.toFixed(1)}°C`,
    },
    description: weather[0]?.description,
    additionalInfo: [
      {
        title: '',
        value: `${wind?.speed}m/s SSE`,
        icon: 'wind-velocity',
      },
      {
        title: '',
        value: `${main?.pressure}hPa`,
        icon: 'pressure',
      },
      {
        title: 'Humidity',
        value: `${main?.humidity}%`,
        icon: '',
      },
      {
        title: 'Dew point',
        value: 'todo',
        icon: '',
      },
      {
        title: 'Visibility',
        value: `${visibility}km`,
        icon: '',
      },
    ],
  };
};
