import { Place } from '@/interfaces/weather-widget/Place';
import { Temperature } from '@/interfaces/weather-widget/Temperature';
import { WeatherAdditionalInfo } from '@/interfaces/weather-widget/WeatherAdditionalInfo';

export interface CurrentWeather {
  place: Place;
  temperature: Temperature;
  description: string;
  additionalInfo: WeatherAdditionalInfo[];
}
