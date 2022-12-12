const numberToReversedDigits = (number) => {
  const reverseDigits = number.toString().split("").reverse().map(Number);
  return reverseDigits;
};
module.exports = numberToReversedDigits;
