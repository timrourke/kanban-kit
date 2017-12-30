/**
 * Parse a date to its locale string
 *
 * @param {String|Date} date
 * @param {String} locale
 * @return {String}
 */
export const parseDate = function parseDate(date, locale = 'en-US') {
  if (!date || !String(date).trim()) {
    return '–';
  }

  return new Date(date).toLocaleString(locale);
}
