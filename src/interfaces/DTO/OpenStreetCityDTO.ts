export interface OpenStreetCityDTO {
  address: {
    country: string;
    town?: string;
    city?: string;
    village?: string;
    hamlet?: string;
  };
  lat: string;
  lon: string;
}
