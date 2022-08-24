export interface OpenWeatherCurrentDTO {
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
  main: {
    temp: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  name: string;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
}
