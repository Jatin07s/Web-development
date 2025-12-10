let arr = [87 , 90 , 50 , 92 , 61 , 98 , 87 , 99 , 100];

// we have to print ki jin jin baccho ke 90+ hai unhe print krdo 

// so we use filter method means filter krega arr se ki kis kis ke 90+ hai unhe new list mai daalke print kr dega easy man :)

let output = arr.filter((val) => {
    return val > 90;
});

console.log(output)