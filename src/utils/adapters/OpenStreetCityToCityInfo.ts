import { Nullable } from '@/interfaces/base/Nullable';
import { CityInfo } from '@/interfaces/weather-widget/CityInfo';
import { OpenStreetCityDTO } from '@/interfaces/DTO/OpenStreetCityDTO';
import { isObjectEmpty } from '@/utils/base/isObjectEmpty';

export const openStreetCityToCityInfo = (
  openStreetCity: OpenStreetCityDTO,
): Nullable<CityInfo> => {
  if (isObjectEmpty(openStreetCity)) return null;

  const { lat, lon, address } = openStreetCity;
  const { town, state, country } = address;

  return {
    coordinates: {
      lat: parseFloat(lat),
      lon: parseFloat(lon),
    },
    address: `${town}, ${state}, ${country}`,
  };
};
