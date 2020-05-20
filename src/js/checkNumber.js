export default function checkNumber(input) {
  const error = Error('Ошибка, введите числовое значение');
  try {
    if (Number.isNaN(Number(input))) {
      throw error;
    }
    return input;
  } catch (e) {
    return error.message;
  }
}
