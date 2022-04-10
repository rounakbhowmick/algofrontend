const reverseWords=(sentence)=>{
    sentence=sentence.split(" ")
    for(i in sentence){
        sentence[i]=[...sentence[i]].reverse().join('');
    }
    return sentence.join(" ")
}
console.log(reverseWords("I love JavaScript!"))