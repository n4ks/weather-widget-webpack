import axiosInstance from '@/api/axios';
import { Coordinates } from '@/interfaces/weather-widget/Coordinates';
import { IPAPILocationDTO } from '@/interfaces/DTO/IPAPILocationDTO';
import { Nullable } from '@/interfaces/base/Nullable';
import { ipapiLocationToLocation } from '@/utils/adapters/ipapiLocationToLocation';

interface IPAPILocationResponse {
  data: IPAPILocationDTO;
  error?: boolean;
}

const geocoding = {
  getCoordinatesByIP: async (): Promise<Nullable<Coordinates>> => {
    const endpoint = `${process.env.VUE_APP_IPAPI_URL}/json`;
    let response: IPAPILocationResponse;
    let result: Nullable<Coordinates>;

    try {
      response = (await axiosInstance.get(endpoint)) as IPAPILocationResponse;
      result =
        !response.error && response?.data
          ? ipapiLocationToLocation(response.data)
          : null;
    } catch (e) {
      // TODO throw
      console.log(e);
    }

    return result;
  },
  searchCitiesByName: async (city: string) => {
    const endpoint = `https://nominatim.openstreetmap.org/search?city=${city}&format=json&addressdetails=1`;
    let response;
    let result;

    try {
      response = await axiosInstance.get(endpoint);
      result = response?.data;
    } catch (e) {
      console.log(e);
    }
    console.log(result);
    return result;
  },
};

export { geocoding };
