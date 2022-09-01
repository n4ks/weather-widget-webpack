import { Coordinates } from '@/interfaces/weather-widget/Coordinates';

export interface CityInfo {
  id: number;
  coordinates: Coordinates;
  address: string;
}
