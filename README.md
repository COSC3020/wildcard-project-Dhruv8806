[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13051693&assignment_repo_type=AssignmentRepo)
# Wildcard Project

You have a cool idea for an algorithms project? Use this repository. Make sure
to explain what problem you're solving and how you're doing it.

## Approach and RunTime Complexity

For the Wildcard project I've implemented an "advanced" version of Bubble Sort algorithm that not only sorts an array but also incorporates a binary search for efficient finding element in the sorted array. The sorting process involves iteratively comparing and swapping adjacent elements until the array is sorted. The binary search optimally narrows down the search range, making it a logarithmic time complexity operation. This combination of sorting and binary search makes the algorithm more suitable for scenarios where searches in a sorted array are expected much more.

### Worst-Case Complexity: 

The bubble sort implementation has an $O(n)$ worst-case complexity, where ' $n$ ' is the number of elements in the array. This is due to the fact that when the array is in reverse order, each element must undergo comparison and potential swapping in every iteration. The nested inner loop traverses the array, and it requires $n-1$ passes for the largest element in the worst case to find its sorted position. 

The $O(n)$ complexity in Bubble Sort comes from the nested loops. The outer loop runs $n$ times, and the inner loop, is responsible for comparisons, that runs $n−1$ times in the worst case. This nested structure establishes the linear relationship observed in the worst-case scenario.

The Binary Search implementation has an $\ (O(log (n)))$ worst-case complexity, which efficiently divides the search range in half at each step. When combining Bubble Sort and Binary Search, the overall time complexity of the algorithm is $\ O(n)$ .

### Overall: 

The implemenated algorithm combines the Bubble Sort with the efficiency of Binary Search for finding elements in a sorted array. While the Bubble Sort may not be as fast for large datasets. As for the binary search improves the efficiency of finding element, making it suitable for scenarios where searching in a sorted array is a common.
