import axiosInstance from '@/api/axios';
import { OpenWeatherLocationDTO } from '@/interfaces/DTO/OpenWeatherLocationDTO';
import { IPAPILocationDTO } from '@/interfaces/DTO/IPAPILocationDTO';

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
    // TODO: 400 (global?)
    // TODO: check to adapter
    const result =
      Array.isArray(response) && response.length > 0 ? response[0] : null;

    return result;
  },
  getLocationByIP: async () => {
    const endpoint = `${process.env.VUE_APP_IPAPI_URL}/json`;
    // const response = await axiosInstance.get<ILocationDTOResponse>(endpoint);
    const response = (await axiosInstance.get(endpoint))
      ?.data as IPAPILocationDTO;

    console.log(response);
  },
};

export { geocoding };
