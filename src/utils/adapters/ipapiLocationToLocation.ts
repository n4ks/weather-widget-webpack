import { IPAPICoordinatesDTO } from '@/interfaces/DTO/IPAPICoordinatesDTO';
import { Nullable } from '@/interfaces/base/Nullable';
import { Coordinates } from '@/interfaces/weather-widget/Coordinates';
import { isObjectEmpty } from '@/utils/base/isObjectEmpty';

export const ipapiLocationToLocation = (
  ipapiCoordinates: IPAPICoordinatesDTO,
): Nullable<Coordinates> => {
  if (isObjectEmpty(ipapiCoordinates)) return null;

  const { latitude, longitude } = ipapiCoordinates;

  return {
    lat: latitude,
    lon: longitude,
  };
};
