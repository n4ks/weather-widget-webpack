const addLeadingZeroToTime = (time: number) => {
  return time < 10 ? '0' + time : time;
};

const getTimeFromUnixTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp * 1000);

  const time = [date.getHours(), date.getMinutes(), date.getSeconds()];
  const formattedTime = time.map(addLeadingZeroToTime).join(':');

  return formattedTime;
};

export { getTimeFromUnixTimestamp };
