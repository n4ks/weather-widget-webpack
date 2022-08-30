import { Nullable } from '@/interfaces/base/Nullable';
import { CityInfo } from '@/interfaces/weather-widget/CityInfo';
import { OpenStreetCityDTO } from '@/interfaces/DTO/OpenStreetCityDTO';

export const openStreetCitiesToCitiesInfo = (
  openStreetCities: OpenStreetCityDTO[],
): Nullable<CityInfo[]> => {
  if (!openStreetCities?.length) return null;

  const cities = openStreetCities.map((openStreetCity) => {
    const { lat, lon, address } = openStreetCity;
    const { town, city, hamlet, village, state, country } = address;

    return {
      coordinates: {
        lat: parseFloat(lat),
        lon: parseFloat(lon),
      },
      address: `${town ?? city ?? hamlet ?? village}, ${state}, ${country}`,
    };
  });

  return cities;
};
