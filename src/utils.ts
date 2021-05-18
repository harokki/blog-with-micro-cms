import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export const utcToJST = (isoString: string): string => {
  const utcDate = new Date(isoString);
  const jstDate = utcToZonedTime(utcDate, 'Asia/Tokyo');
  const jstString = format(jstDate, 'yyyy/MM/dd HH:mm:ss');

  return jstString;
};

export const bodyToDescription = (
  body: string | undefined,
  wordCount: number,
): string | undefined => {
  const description = body || '';

  return description.replace(/(<([^>]+)>)/gi, '').substring(0, wordCount);
};

export const range = (start: number, end: number): number[] =>
  Array.from({ length: end - start + 1 }, (_, i) => start + i);
