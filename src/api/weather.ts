import axiosInstance from '@/api/axios';
import { OpenWeatherCurrentDTO } from '@/interfaces/DTO/OpenWeatherCurrentDTO';
import { Nullable } from '@/interfaces/base/Nullable';
import { CurrentWeather } from '@/interfaces/weather-widget/CurrentWeather';
import { openWeatherCurrentToWeather } from '@/utils/adapters/openWeatherCurrentToWeather';
import { Coordinates } from '@/interfaces/weather-widget/Coordinates';

interface OpenWeatherCurrentResponse {
  data: OpenWeatherCurrentDTO;
}

const weather = {
  fetchCurrentWeatherByCoords: async ({
    lat,
    lon,
  }: Coordinates): Promise<Nullable<CurrentWeather>> => {
    const endpoint = `/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${process.env.VUE_APP_WEATHER_API_KEY}`;
    let response: OpenWeatherCurrentResponse;
    let result: Nullable<CurrentWeather>;

    try {
      response = (await axiosInstance.get(
        endpoint,
      )) as OpenWeatherCurrentResponse;
      result = openWeatherCurrentToWeather(response.data);
    } catch (e) {
      // TODO: throw
      console.log(e);
    }

    return result;
  },
};

export { weather };
