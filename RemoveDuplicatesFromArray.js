const input = [5, 3, 5, 2, 3, 9, 2, 7];
function removeDuplicates(arr) {
  let arrayNumber = [];
  for (let number of arr) {
    if (arrayNumber.includes(number)) {
      continue;
    } else {
      arrayNumber.push(number);
    }
  }
  return arrayNumber;
}
const result = removeDuplicates(input);
console.log(result);
