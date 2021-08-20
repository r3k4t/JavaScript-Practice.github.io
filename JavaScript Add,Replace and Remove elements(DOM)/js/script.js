// Adding Element to DOM
// Create Element
let olItem = document.createElement('li');
console.log(olItem);

// Add Id and Class

olItem.className = "a new another-class";
olItem.id = "new-element";


// Add Attribute
olItem.setAttribute('title','A title to new Element');


olItem.appendChild(document.createTextNode('JavaScript'))
document.querySelector('ol').appendChild(olItem);

// console.log(olItem);


let ulItem = document.createElement('li');
let link = document.createElement('a');


link.appendChild(document.createTextNode('Instagram'))
link.setAttribute('href','https://www.instagram.com');
ulItem.appendChild(link);
document.querySelector('ul').appendChild(ulItem);
console.log(ulItem);


//Replacing Elements
let newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode("H1 New Heading"))
newHeading.className = 'sample-class';

let oldHeading = document.querySelector('h3');


let parent = document.querySelector('.container');
parent.replaceChild(newHeading,oldHeading);


console.log(newHeading);

console.log(oldHeading);

console.log(parent);




