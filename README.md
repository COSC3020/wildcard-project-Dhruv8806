[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=13051693&assignment_repo_type=AssignmentRepo)
# Wildcard Project

You have a cool idea for an algorithms project? Use this repository. Make sure
to explain what problem you're solving and how you're doing it.

## Approach and RunTime Complexity

For the Wildcard project I've implemented an "advanced" version of Bubble Sort algorithm that not only sorts an array but also incorporates a binary search for efficient finding element in the sorted array. The sorting process involves iteratively comparing and swapping adjacent elements until the array is sorted. The binary search optimally narrows down the search range, making it a logarithmic time complexity operation. This combination of sorting and binary search makes the algorithm more suitable for scenarios where searches in a sorted array are expected much more.

Worst-Case Complexity: 

The bubble sort implementation has a $\ O(n^2)$ in the worst case complexity, where ' $n$ ' is the number of elements in the array. This is because, when the array is in reverse order, each element needs to be compared and swapped in every iteration. The inner loop traverses the array, and it requires $n-1$ passes for the largest element in the worst case to reach its sorted position. The Binary Search implementation has a $\ (O(log (n)))$ in it's worst case complexity, as it efficiently divides the search range in half at each step. Therefore, the overall time complexity will be $\Theta (n^2)$. 

Overall: 

The implemenated algorithm combines the Bubble Sort with the efficiency of Binary Search for finding elements in a sorted array. While the Bubble Sort may not be as fast for large datasets. As for the binary search improves the efficiency of finding element, making it suitable for scenarios where searching in a sorted array is a common.
