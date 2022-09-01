import { Nullable } from '@/interfaces/base/Nullable';

export const isObjectEmpty = (obj: Nullable<object>) =>
  obj &&
  Object.keys(obj).length === 0 &&
  Object.getPrototypeOf(obj) === Object.prototype;
