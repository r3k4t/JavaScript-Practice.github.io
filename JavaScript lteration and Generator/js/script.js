// Iterator
let iterable = "Hello";
iterable = [1,2,3,4,5,5];
// Symbol.iterator
let iter = iterable[Symbol.iterator]();

console.log(iter);

console.log(iter.next());
console.log(iter.next());

console.log("Other Codes...");

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());


// Custom Iterator
function customIterator(arr) {
    let i = 0;

    return {
        next: function() {
            return i < arr.length ? { value: arr[i++], done: false} : { value: undefined, done: true };
        }
    };
}

let members = customIterator(names);

console.log(members.next().value);
console.log(members.next().value);
console.log(members.next().value);
console.log("Random codes...");
console.log(members.next());
console.log(members.next());



// Generators

function* genFunction() {
    console.log("I am some code");
    yield 1;
    return;
    console.log("I am some code");
    console.log("I am some code");
    console.log("I am some code");
    yield "Rahim";
    yield 4;
    yield "Karim";
    yield "Hello World";
}

let iter = genFunction();

console.log(iter.next().value);
console.log(iter.next().value);