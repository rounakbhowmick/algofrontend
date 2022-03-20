 // Type 1
    // let strnew="";
    // for(let i=str.length-1;i>=0;i--)
    //     strnew+=str[i];
    // return strnew;

    //Type 2
    //return [...str].reverse().join('');

    //Type 3
    // let reversed = "";
    // for (start of str) {
    //     reversed = start+reversed;
    // }
    // return reversed;

    //Type 4

    return [...str].reduce((rev, char) => char + rev, '')