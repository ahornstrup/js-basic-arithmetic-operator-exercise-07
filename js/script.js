"use strict"

let subtotal = 50;
let shipping = 10;
let quantity = 3;

subtotal += 20;

let totalExclusiveTax = ((quantity * subtotal) + shipping);

let totalInclusiveTax = (totalExclusiveTax * 1.25);

document.getElementById("subtotal").textContent = `${subtotal}`; 
document.getElementById("shipping").textContent = `${shipping}`; 
document.getElementById("total").textContent = `${totalExclusiveTax}`; 

console.log(totalExclusiveTax);
console.log(totalInclusiveTax);