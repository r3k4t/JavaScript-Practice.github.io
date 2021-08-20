// Promises
// An alternative to Callback

let applyDiscount = new Promise((resolve, reject) => {
    let discount = false;
    if (discount) {
        resolve('Discount Applied');
    } else {
        reject('Discount Failed!');
    }
});

applyDiscount
    .then(result => {
        console.log(result);
    })
    .catch(result => {
        console.log(result);
    })

//console.log(applyDiscount);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise