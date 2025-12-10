function vowelCount(str) {
    //'hello' , count = 2
    let count = 0;
    for (let char of str) {
        // console.log(char)
        if (char === "a" ||
            char === "e" || 
            char === "i" || 
            char === "o" || 
            char === "u"
        ){
            count++;
        }
    }
    return count;
}


// so basically jab hum call karenge ise , toh yeh vowels ka count krke de dega 