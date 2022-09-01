import { Nullable } from '@/interfaces/base/Nullable';
import { CityInfo } from '@/interfaces/weather-widget/CityInfo';
import { OpenStreetCityDTO } from '@/interfaces/DTO/OpenStreetCityDTO';

export const openStreetCitiesToCitiesInfo = (
  openStreetCities: OpenStreetCityDTO[],
): Nullable<CityInfo[]> => {
  if (!openStreetCities?.length) return null;

  const cities = openStreetCities.map((city) => {
    const { lat, lon, display_name } = city;

    return {
      coordinates: {
        lat: parseFloat(lat),
        lon: parseFloat(lon),
      },
      address: display_name,
    };
  });

  return cities;
};
