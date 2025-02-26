let arr = [1, 2, 3, 4, 5];

arr[2]; // searching an element based on index           -> O(1)
arr.push(6); //inserting an element at the end           -> O(1)
arr.unshift(0); //inserting an element at the beginning  -> O(n)
arr.pop(); //removing last element                       -> O(1)
arr.shift(); //removing first element                    -> O(n)
arr.indexOf(4); //fiding the index of an element         -> O(n)
arr.sort((a, b) => b - a); //sorting in descending order -> O(log)
