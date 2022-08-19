import { Place } from '@/interfaces/Place';
import { Temperature } from '@/interfaces/Temperature';
import { WeatherAdditionalInfo } from '@/interfaces/WeatherAdditionalInfo';

export interface Weather {
  place: Place;
  temperature: Temperature;
  description: string;
  additionalInfo: WeatherAdditionalInfo;
}
