import axiosInstance from '@/api/axios';
import { OpenWeatherLocationDTO } from '@/interfaces/DTO/OpenWeatherLocationDTO';
import { Location } from '@/interfaces/weather-widget/Location';
import { IPAPILocationDTO } from '@/interfaces/DTO/IPAPILocationDTO';
import { Nullable } from '@/interfaces/base/Nullable';
import { ipapiLocationToLocation } from '@/utils/adapters/ipapiLocationToLocation';

interface IPAPILocationResponse {
  data: IPAPILocationDTO;
  error?: boolean;
}

// FIXME: add return type

const geocoding = {
  getLocationByCityCountry: async (
    city: string,
    countryCode: string,
    limit = 1,
    stateCode = '',
  ) => {
    const endpoint = `/geo/1.0/direct?q=${city}, ${stateCode},${countryCode}&limit=${limit}&appid=${process.env.VUE_APP_WEATHER_API_KEY}`;
    const response = (await axiosInstance.get(endpoint))
      ?.data as OpenWeatherLocationDTO;

    // TODO: check to adapter
    const result =
      Array.isArray(response) && response.length > 0 ? response[0] : null;

    return result;
  },
  getLocationByIP: async (): Promise<Nullable<Location>> => {
    const endpoint = `${process.env.VUE_APP_IPAPI_URL}/json`;
    let response: IPAPILocationResponse;
    let result: Nullable<Location>;

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
  getCitiesByCityName: async (city: string) => {
    const endpoint = `https://nominatim.openstreetmap.org/search?city=${city}&format=json`;
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
