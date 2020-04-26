/* eslint-disable linebreak-style */

const test = 'один';

export default function checkNumber(input) {
  const error = Error('Ошибка, введите числовое значение');
  try {
    const inputCheck = parseInt(input, 10);
    if (Number.isNaN(inputCheck)) {
      throw error;
    }
    return input;
  } catch (e) {
    console.log(error.message);
    return error.message;
  }
}

checkNumber(test);
