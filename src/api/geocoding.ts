import axiosInstance from '@/api/axios';
import { IPAPICoordinatesDTO } from '@/interfaces/DTO/IPAPICoordinatesDTO';
import { OpenStreetCityDTO } from '@/interfaces/DTO/OpenStreetCityDTO';
import { Coordinates } from '@/interfaces/weather-widget/Coordinates';
import { Nullable } from '@/interfaces/base/Nullable';
import { CityInfo } from '@/interfaces/weather-widget/CityInfo';
import { ipapiLocationToLocation } from '@/utils/adapters/ipapiLocationToLocation';
import { openStreetCitiesToCitiesInfo } from '@/utils/adapters/openStreetCitiesToCitiesInfo';

interface IPAPICoordinatesResponse {
  data: IPAPICoordinatesDTO;
  error?: boolean;
}

interface OpenStreetCityResponse {
  data: OpenStreetCityDTO[];
}

const geocoding = {
  fetchCoordinatesByIP: async (): Promise<Nullable<Coordinates>> => {
    const endpoint = `${process.env.VUE_APP_IPAPI_URL}/json`;
    let response: IPAPICoordinatesResponse;
    let result: Nullable<Coordinates>;

    try {
      response = (await axiosInstance.get(
        endpoint,
      )) as IPAPICoordinatesResponse;

      if (response.error) {
        // FIXME: error message IPAPI doc
        throw 'error';
      }

      result = ipapiLocationToLocation(response.data);
    } catch (e) {
      console.log(e);
    }

    return result;
  },
  fetchCitiesByName: async (city: string): Promise<Nullable<CityInfo[]>> => {
    const endpoint = `https://nominatim.openstreetmap.org/search?city=${city}&format=json`;
    let response: OpenStreetCityResponse;
    let result: Nullable<CityInfo[]>;

    try {
      response = (await axiosInstance.get(endpoint)) as OpenStreetCityResponse;
      result = openStreetCitiesToCitiesInfo(response.data);
    } catch (e) {
      console.log(e);
    }
    return result;
  },
};

export { geocoding };
