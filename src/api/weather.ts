import axiosInstance from '@/api/axios';
import { isObjectNotEmpty } from '@/utils/isObjectNotEmpty';

// FIXME: add return type
const weather = {
  getCurrentWeather: async (lat: number, lon: number) => {
    const endpoint = `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.VUE_APP_WEATHER_API_KEY}`;
    const response = await axiosInstance.get(endpoint);
    // TODO: 400 (global?)
    // TODO: check to adapter
    const result = isObjectNotEmpty(response.data) ? response.data : null;

    console.log(result);
    return result;
  },
};

export { weather };
