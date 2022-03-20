const palindrome=(str)=>{
    if(!str) return false;
    const newstr=str.replace(/[^a-z0-9]/gi,'')
    return newstr.toLowerCase()==[...newstr].reverse().join('').toLowerCase();
}

console.log(palindrome("sit ad est love"))
