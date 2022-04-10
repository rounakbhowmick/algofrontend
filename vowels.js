const vowels=(str)=>{
    return str.match(/[aeiou]/gi).length;
}
console.log(vowels('hello world'))
