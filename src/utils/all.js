/** */
export const getFormattedDate = (date) =>
  date ?
    new Date(date).toLocaleDateString(
      'de-de', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
    ) :
    '';
