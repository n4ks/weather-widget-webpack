export const truncateText = (text: string, limit = 18) => {
  return text.length <= limit ? text : text.slice(0, limit) + '...';
};
