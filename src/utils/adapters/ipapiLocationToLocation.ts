import { IPAPILocationDTO } from '@/interfaces/DTO/IPAPILocationDTO';
import { Nullable } from '@/interfaces/base/Nullable';
import { Coordinates } from '@/interfaces/weather-widget/Coordinates';
import { isObjectEmpty } from '@/utils/base/isObjectEmpty';

export const ipapiLocationToLocation = (
  ipapiLocation: IPAPILocationDTO,
): Nullable<Coordinates> => {
  if (isObjectEmpty(ipapiLocation)) return null;

  const { latitude, longitude } = ipapiLocation;

  return {
    lat: latitude,
    lon: longitude,
  } as Coordinates;
};
