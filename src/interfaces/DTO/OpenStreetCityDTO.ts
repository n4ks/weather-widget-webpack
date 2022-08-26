export interface OpenStreetCityDTO {
  address: {
    country: string;
    town?: string;
    village?: string;
    hamlet?: string;
    state: string;
  };
  lat: string;
  lon: string;
}
