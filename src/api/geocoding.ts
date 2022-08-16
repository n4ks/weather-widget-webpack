import axiosInstance from '@/api/axios';

const getGeocoding = async (
  city: string,
  countryCode: string,
  limit = 1,
  stateCode = '',
) => {
  const endpoint = `/geo/1.0/direct?q=${city}, ${stateCode},${countryCode}&limit=${limit}&appid=${process.env.VUE_APP_WEATHER_API_KEY}`;
  const response = await axiosInstance.get(endpoint);
  // TODO: 400 (global?)
  const result =
    Array.isArray(response.data) && response.data.length > 0
      ? response.data[0]
      : null;

  return result;
};

export { getGeocoding };
