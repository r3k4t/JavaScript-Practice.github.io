// Regular Expression
// Pattern Matching Technique

let re;
let str;


re = /hello/;
re = /Hello/;
re = /hello/i; //i = case insensitive



console.log(re);
console.log(re.source);


str = "Hello World";
str = "Again Hello World";
str = "Hell World";
str = "sdsHellosds World";
str = "Again Hello World Hello";
str = "World";


// exec() -Returns result in an array or null
let result = re.exec(str);

// test() - true/false
result2 = re.test(str);

// match() - Returns array or null
str = "Again Hello World Hello";

result3= str.match(re);


// search() - Returns index of the first match or -1
str = "World";

result4 = str.search(re);


// replace() - Return new string
str = "Again Hello World Hello";
let newstr = str.replace(re,"Hi")







console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(str);
console.log(newstr);