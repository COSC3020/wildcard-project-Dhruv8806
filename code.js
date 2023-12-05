// Bubble Sort: Sorts and searches in an array using an optimized Bubble Sort algorithm.
 
function BubbleSort(arr, compare = (a, b) => a - b) {
    const len = arr.length;
    let swapped;
  
    for (let i = 0; i < len - 1; i++) {
      swapped = false;
  
      for (let j = 0; j < len - 1 - i; j++) {
        if (shouldSwap(arr[j], arr[j + 1], compare)) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
          swapped = true;
        }
      }
  
      // If no swapping occurred in the inner loop, the array is already sorted
      if (!swapped) {
        break;
      }
    }
  
    function search(target) {
      let low = 0;
      let high = len - 1;
  
      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const midElement = arr[mid];
  
        if (compare(midElement, target) === 0) {
          return mid; 
        } else if (compare(midElement, target) < 0) {
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
  
      return -1; // Element not found
    }
  
    return { sortedArray: arr, search };

  }

  function shouldSwap(a, b, compare) {
    return compare(a, b) > 0;
  }

  //TestArray
  const arraysToSort = [
    [4, 2, 7, 1, 9], //Array 1
    [10, 5, 3, 8, 6], //Array 2
    
  ];
  

  arraysToSort.forEach((arr, index) => {
    console.log(`Original Array ${index + 1}:`, arr);  //console.log original array 
    const result = BubbleSort(arr);
  
    console.log(`Sorted Array ${index + 1}:`, result.sortedArray); //console.log sorted array
  
    // Test the search function
    const targetElementIndex = Math.floor(Math.random() * arr.length); // Randomly choose an index
    const targetElement = arr[targetElementIndex];
    const searchResult = result.search(targetElement);

    console.log(`Search Result for Array ${index + 1} (Searching for ${targetElement}):`, searchResult);
    // const searchResult = result.search(arr[0]); // Search for the smallest element
    // console.log(`Search Result for Array ${index + 1}:`, searchResult);
  });

/*
Sources Used:
https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/
TA
*/
