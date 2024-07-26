/** */
export const getFormattedDate = (date: string): string => {
  return date ?
    new Date(date).toLocaleDateString(
      'de-de', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
    ) :
    '';
};

export const getAnchorFromText = (text: string): string => {
  return String(text)
    .toLowerCase()
    .replace(/\u00fc/g, 'ue')
    .replace(/\u00e4/g, 'ae')
    .replace(/\u00f6/g, 'oe')
    .replace(/\u00df/g, 'ss')
    .replace(/[^a-z0-9\-. ]+/g, '')
    .replace(/ /g, '-')
    .replace(/-{2,}/g, '-');
};
