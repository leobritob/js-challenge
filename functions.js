function moveZerosToEnd(list) {
  if (list.length > 100) throw new Error('Please enter a length valid');
  if (!list.every((item) => item >= 0 && item <= 9)) throw new Error('Please enter a valid list');

  const result = [];
  let zeroCounts = 0;

  for (let i = 0; i < list.length; i++) {
    const element = list[i];

    if (element === 0) {
      zeroCounts += 1;
    } else {
      result.push(element);
    }
  }

  for (let i = 0; i < zeroCounts; i++) {
    result.push(0);
  }

  return result;
}

function addOneUnitToList(list, unit = 1) {
  if (!list) throw new Error('Please enter a valid list');

  let fictitiousInteger = Number(list.join(''));

  fictitiousInteger += unit;

  return String(fictitiousInteger)
    .split('')
    .map((item) => Number(item));
}

function multiplyEachDigits(list, num) {
  for (let i = 0; i < list.length; i++) {
    if (i % 2 === 0) {
      list[i] = list[i] * num;
    }
  }

  return list;
}

function sumAllDigits(list) {
  let subArraySumList = [];

  for (let i = 0; i < list.length; i++) {
    for (let x = 1; x < list.length; x++) {
      const subArray = [...list].splice(i, x);

      const subArraySum = subArray.reduce((total, current) => total + current, 0);
      subArraySumList.push(subArraySum);
    }
  }

  return subArraySumList.sort((a, b) => b - a)[0];
}

module.exports = {
  moveZerosToEnd,
  addOneUnitToList,
  multiplyEachDigits,
  sumAllDigits,
};
