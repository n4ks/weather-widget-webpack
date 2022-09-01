import { Nullable } from '@/interfaces/base/Nullable';
// FIXME: any
const ls = {
  addToStorage(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  },
  getFromStorage(key: string): Nullable<any> {
    const data = localStorage.getItem(key);

    return data ? JSON.parse(data) : null;
  },
};

export { ls };
