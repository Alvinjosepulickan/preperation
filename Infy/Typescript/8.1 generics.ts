function swap<T>(x: T, y: T): [T, T] {
    return [y, x];
}

// Usage
let result = swap("hello", "world");
console.log(result); // Output: ["world", "hello"]

let numResult = swap(1, 2);
console.log(numResult); // Output: [2, 1]
