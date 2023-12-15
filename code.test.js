const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js') + '');

const test = jsc.forall(jsc.array(jsc.integer), function (arr) {
  // Create a deep copy of the input array for comparison
  const originalArray = JSON.parse(JSON.stringify(arr));
  const result = BubbleSort(arr);

  // Check if the sorted array matches the expected sorted array
  const expectedSortedArray = originalArray.slice().sort(function (a, b) {
    return a - b;
  });

  const sortedArrayMatches = JSON.stringify(result.sortedArray) === JSON.stringify(expectedSortedArray);

  const searchResult = result.search(expectedSortedArray[0]); // Searches for the smallest element
  const searchMatches = searchResult === 0;

  return sortedArrayMatches && searchMatches;
});
