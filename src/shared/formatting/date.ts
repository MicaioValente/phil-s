export function dateFormattedToShow(date: string | number | Date): string {
  const formattedDate = new Date(date);

  const day = formattedDate.getUTCDate().toString().padStart(2, '0');
  const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0');
  const year = formattedDate.getFullYear();

  return `${month}-${day}-${year}`;
}

export function getCurrentDate(): Date {
  const date = new Date(new Date().toUTCString());

  const milliseconds = Date.UTC(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  );

  const localTime = new Date(milliseconds);

  return localTime;
}
