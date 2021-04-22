import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export const utcToJST = (isoString: string): string => {
  const utcDate = new Date(isoString);
  const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo');
  const jstString = format(jstDate, 'yyyy/MM/dd HH:mm:ss');

  return jstString;
};
