import { IPAPILocationDTO } from '@/interfaces/DTO/IPAPILocationDTO';
import { Nullable } from '@/interfaces/base/Nullable';
import { Location } from '@/interfaces/Location';

const ipapiLocationToLocation = ({
  latitude,
  longitude,
}: IPAPILocationDTO): Nullable<Location> => {
  if (!(latitude && longitude)) return null;

  return {
    lat: latitude,
    lon: longitude,
  } as Location;
};
export { ipapiLocationToLocation };
