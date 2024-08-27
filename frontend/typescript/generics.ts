// A generic function to get the first element of an array
function firstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

const numberArray = [1, 2, 3];
const stringArray = ['a', 'b', 'c'];

const firstNumber = firstElement(numberArray); // Type is number
const firstString = firstElement(stringArray); // Type is string

console.log(firstNumber); // Output: 1
console.log(firstString); // Output: 'a'


class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }

    setValue(value: T): void {
        this.value = value;
    }
}

const numberBox = new Box<number>(123);
const stringBox = new Box<string>('hello');

console.log(numberBox.getValue()); // Output: 123
console.log(stringBox.getValue()); // Output: 'hello'



interface Pair<T, U> {
    first: T;
    second: U;
}

const numberStringPair: Pair<number, string> = {
    first: 1,
    second: 'one'
};

console.log(numberStringPair); // Output: { first: 1, second: 'one' }
