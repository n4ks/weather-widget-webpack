const getTimeFromUnixTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);

  return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

export { getTimeFromUnixTimestamp };
