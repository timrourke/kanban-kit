import { parseDate } from './date';

const EN_US_LOCALE_DATE_STRING_REGEX = /^[0-9]+\/[0-9]+\/[0-9]+, [0-9]+:[0-9]+:[0-9]+ (A|P)M$/;

describe('utils/date', () => {
  it('should parse a date to its locale string', () => {
    const date = new Date();

    expect(parseDate(date)).toMatch(EN_US_LOCALE_DATE_STRING_REGEX);
  });

  it('should parse a date to its locale string when passed a valid date string', () => {
    const date = '2017-12-30T00:51:44.220Z';

    expect(parseDate(date)).toMatch(EN_US_LOCALE_DATE_STRING_REGEX);
  });

  [
    0,
    false,
    null,
    ' ',
    '',
  ].forEach((falseyValue) => {
    it('should return an em dash when a falsey value is passed', () => {
      expect(parseDate(falseyValue)).toBe('–');
    });
  });
});
