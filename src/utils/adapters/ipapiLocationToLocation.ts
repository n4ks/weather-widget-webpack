import { IPAPILocationDTO } from '@/interfaces/DTO/IPAPILocationDTO';
import { Nullable } from '@/interfaces/base/Nullable';
import { Location } from '@/interfaces/weather-widget/Location';
import { isObjectEmpty } from '@/utils/base/isObjectEmpty';

export const ipapiLocationToLocation = (
  ipapiLocation: IPAPILocationDTO,
): Nullable<Location> => {
  if (isObjectEmpty(ipapiLocation)) return null;

  const { latitude, longitude } = ipapiLocation;

  return {
    lat: latitude,
    lon: longitude,
  } as Location;
};
