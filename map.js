var numbers = [32, 42, 67, 89];

function myFunction(num) {
    return num * 10;
}

var newarray = numbers.map(myFunction);
console.log(newarray);