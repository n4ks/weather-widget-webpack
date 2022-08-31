import { IPAPICoordinatesDTO } from '@/interfaces/DTO/IPAPICoordinatesDTO';
import { Nullable } from '@/interfaces/base/Nullable';
import { Coordinates } from '@/interfaces/weather-widget/Coordinates';
import { utils } from '@/utils/base';

export const ipapiLocationToLocation = (
  ipapiCoordinates: IPAPICoordinatesDTO,
): Nullable<Coordinates> => {
  if (utils.isObjectEmpty(ipapiCoordinates)) return null;

  const { latitude, longitude } = ipapiCoordinates;

  return {
    lat: latitude,
    lon: longitude,
  };
};
