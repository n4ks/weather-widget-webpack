import axiosInstance from '@/api/axios';
import { OpenWeatherCurrentDTO } from '@/interfaces/DTO/OpenWeatherCurrentDTO';
import { Nullable } from '@/interfaces/base/Nullable';
import { CurrentWeather } from '@/interfaces/weather-widget/CurrentWeather';
import { openWeatherCurrentToWeather } from '@/utils/adapters/openWeatherCurrentToWeather';

interface OpenWeatherCurrentResponse {
  data: OpenWeatherCurrentDTO;
}

const weather = {
  getCurrentWeather: async (
    lat: number,
    lon: number,
  ): Promise<Nullable<CurrentWeather>> => {
    const endpoint = `/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.VUE_APP_WEATHER_API_KEY}`;
    let response: OpenWeatherCurrentResponse;
    let result: Nullable<CurrentWeather>;

    try {
      response = (await axiosInstance.get(
        endpoint,
      )) as OpenWeatherCurrentResponse;
      result = response?.data
        ? openWeatherCurrentToWeather(response.data)
        : null;
    } catch (e) {
      console.log(e);
    }
    console.log(result);
    return result;
  },
};

export { weather };
