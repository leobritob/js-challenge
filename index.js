const { moveZerosToEnd, addOneUnitToList, multiplyEachDigits, sumAllDigits } = require('./functions');

function main(list) {
  const listWithZerosEnd = moveZerosToEnd(list);
  console.log(listWithZerosEnd);

  const listWithoutZeros = listWithZerosEnd.filter((item) => item !== 0);

  const listWithOneUnit = addOneUnitToList(listWithoutZeros, 1);
  console.log(listWithOneUnit);

  const listMultiplied = multiplyEachDigits(listWithOneUnit, -1);
  console.log(listMultiplied);

  const total = sumAllDigits(listMultiplied);
  console.log(total);
}

main([4, 8, 0, 9, 2, 0, 5, 8, 0, 4, 8]);
