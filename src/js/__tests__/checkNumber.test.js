/* eslint-disable linebreak-style */
import checkNumber from '../checkNumber';

test('is number', () => {
  const result = checkNumber(18);

  expect(result).toBe(18);
});

test('not a number', () => {
  const result = checkNumber('Один');

  expect(result).toBe('Ошибка, введите числовое значение');
});
