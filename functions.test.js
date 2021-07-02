const { expect, it } = require('@jest/globals');
const { moveZerosToEnd, addOneUnitToList, multiplyEachDigits, sumAllDigits } = require('./functions');

describe('moveZerosToEnd', () => {
  it('should move zeros to end of the array successfully', () => {
    // Arrange
    const list = [4, 8, 0, 9, 2, 0, 5, 8, 0, 4, 8];

    // Act
    const result = moveZerosToEnd(list);

    // Assert
    expect(result).toEqual([4, 8, 9, 2, 5, 8, 4, 8, 0, 0, 0]);
  });

  it('should return an empty array when list is an empty array', () => {
    // Arrange
    const list = [];

    // Act
    try {
      moveZerosToEnd(list);
    } catch (error) {
      expect(error.message).toEqual('Please enter a length valid');
    }

    // Assert
    // expect(result).toEqual([]);
  });
});

describe('addOneUnitToList', () => {
  it('should add one unit for each digit of a list successfully', () => {
    // Arrange
    const list = [4, 8, 9, 2, 5, 8, 4, 8];

    // Act
    const result = addOneUnitToList(list, 1);

    // Assert
    expect(result).toEqual([4, 8, 9, 2, 5, 8, 4, 9]);
  });

  it('should return [2]', () => {
    // Arrange
    const list = [1];

    // Act
    const result = addOneUnitToList(list, 1);

    // Assert
    expect(result).toEqual([2]);
  });

  it('should throw an error', () => {
    // Arrange
    const list = null;

    // Assert
    try {
      addOneUnitToList(list, 1);
    } catch (error) {
      expect(error.message).toEqual('Please enter a valid list');
    }
  });
});

describe('multiplyEachDigits', () => {
  it('should multiply each digit by -1 successfully', () => {
    // Arrange
    const list = [4, 8, 9, 2, 5, 8, 4, 9];

    // Act
    const result = multiplyEachDigits(list, -1);

    // Assert
    expect(result).toEqual([4, 8, -9, 2, -5, 8, -4, 9]);
  });
});

describe('sumAllDigits', () => {
  it('should sum all digits', () => {
    // Arrange
    const list = [4, 8, -9, 2, -5, 8, -4, 9];

    // Act
    const result = sumAllDigits(list);

    // Assert
    expect(result).toEqual(13);
  });
});
