const frequency=(string1)=>{
    let freq={};
    // console.log(string1)
    [...string1].forEach((val)=>{
        freq[val]=(freq[val] || 0)+1;
    })
    return freq;
}
const anagrams=(string1,string2)=>{
    if(string1.length!=string2.length) return false;
    const freq1str=frequency(string1);
    const freq2str=frequency(string2);
    for(i in freq1str)
    {
        if(freq1str[i]!==freq2str[i]) return false;
    }
    return true;
}
console.log(anagrams("hellow world", "hello there"));
