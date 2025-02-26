//Time Complexity -> Run time of an algorithm
//Common Big O Notations

// Notation   |      Name         |                      Meaning                      |              Execution Time
//------------------------------------------------------------------------------------------------------------------------------
//   O(1)     |  constant Time    | Execution time doesn't depend on input size       |    Fast, Eg: Accessing an array element
//------------------------------------------------------------------------------------------------------------------------------
//  O(log n)  |  logarithmic time | Execution time grows slowly even for larger inputs|    Fast, Eg: binary search
//-----------------------------------------------------------------------------------------------------------------------------
//   O(n)     |   linear time     | Execution increases proportionally with the input |    Medium, Eg: looping through an array
//-----------------------------------------------------------------------------------------------------------------------------
// O(n log n) | linearithmic time | More complex tasks of sorting                     |    Medium, Eg: merge sort, quick sort

const arr = [1, 2, 3, 4, 5, 6, 7];

//constant time
arr.push(6);

//linear time -> Note: The algorithm scales directly with the input size looping through the array
function printAllElements() {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAllElements();

//logarithmic time -> Note: Execution time is directly proportional to the input
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

//linearithmic time

//merge sort
// 1.It processes "n" elements -> Linear
// 2.The input is divided into smaller parts in a way that the results in a logarithmic depth of recursion -> Logarithmic
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2); // mid value will be 5/2 = 2.5 -> 2 -> floor value
  let left = mergeSort(arr.slice(0, mid)); // [4,2]
  let right = mergeSort(arr.slice(mid)); //[7,1,3]
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    //   0      <    4   && 0 <       4
    if (left[i] < right[j]) result.push(left[i++]);
    else result.push(right[j++]);
    //     8    <    7 -> false else pushes right[j] => pushes 7 to the result and the j is incremented
  }
  // return: [4,2,7,1,3]
  return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log("merge sort");
console.log(mergeSort([8, 3, 2, 9, 7, 1, 5, 4]));

//NOTE: We split the array based on log2(n)
//1.0 first recursion result [8,3,2,9] -> recursion based on divide and conquer as O(log n) time complexity
//  -> 1.1.0 sub recursion : [8,3]
//     -> 1.1.1 sub : [8]
//     -> 1.1.2 sub : [3]
//     -> return : [3,8]
//  -> 1.2.0 sub recursion : [2,9]
//     -> 1.2.1 sub : [2]
//     -> 1.2.2 sub : [9]
//     -> return : [2,9]
//  -> return :[2,3,8,9] -> merge has O(n) time complexity

//2.0 second recursion resut [7,1,5,4]
//  -> 2.1.0 sub recursion : [7,1]
//     -> 2.1.1 sub : [7]
//     -> 2.1.2 sub : [1]
//     -> return : [1,7]
//  -> 2.2.0 sub recursion : [5,4]
//     -> 2.2.1 sub : [5]
//     -> 2.2.2 sub : [4]
//     -> return : [4,5]
//  -> return :[1,4,5,7]

//-> return : [1,2,3,4,5,7,8,9]

//Quick Sort -> Tend to be used for nested loops, time complexity will be O(n^2)
