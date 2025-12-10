let n = prompt("Enter a number : ");
let arr = [];

for(let i=1; i<=n; i++ ) {
    arr[i-1] = i; // 1(0) , 2(1) , 3(2) , 4(3)... ek ek kam 
}

console.log(arr);