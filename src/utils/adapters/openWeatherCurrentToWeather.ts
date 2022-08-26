import { OpenWeatherCurrentDTO } from '@/interfaces/DTO/OpenWeatherCurrentDTO';
import { Nullable } from '@/interfaces/base/Nullable';
import { CurrentWeather } from '@/interfaces/weather-widget/CurrentWeather';
import { isObjectEmpty } from '@/utils/base/isObjectEmpty';
import { WeatherIconDictionary } from '@/utils/dictionaries/WeatherIconDictionary';
import { getTimeFromUnixTimestamp } from '@/utils/dates/dates';

export const openWeatherCurrentToWeather = (
  currentWeather: OpenWeatherCurrentDTO,
): Nullable<CurrentWeather> => {
  if (isObjectEmpty(currentWeather)) return null;

  const { weather, wind, main, visibility, name, sys } = currentWeather;

  return {
    place: {
      city: name,
      countryCode: sys?.country,
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
        title: 'Visibility',
        value: `${visibility ? visibility / 1000 : ''}km`,
        icon: '',
      },
      {
        title: 'Sunrise',
        value: `${sys?.sunrise ? getTimeFromUnixTimestamp(sys.sunrise) : ''}`,
        icon: '',
      },
      {
        title: 'Sunset',
        value: `${sys?.sunset ? getTimeFromUnixTimestamp(sys.sunset) : ''}`,
        icon: '',
      },
    ],
  };
};
