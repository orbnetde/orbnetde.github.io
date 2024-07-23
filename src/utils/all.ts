/** */
export const getFormattedDate = (date: string): string =>
  date ?
    new Date(date).toLocaleDateString(
      'de-de', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
    ) :
    '';


export const getAnchorFromText = (text: string): string => {
  return String(text).toLowerCase().replace(/[^a-zA-Z0-9 ]+/g, '').replace(/ /g, '-');
};
