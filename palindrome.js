const palindrome=(str)=>{
    if(!str) return false;
    return str==[...str].reverse().join('');
}

console.log(palindrome("ababca"))