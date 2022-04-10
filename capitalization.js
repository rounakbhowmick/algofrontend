const capitalize=(sentence)=>{
    sentence=sentence.split(" ")
    for(i in sentence){
        sentence[i]=sentence[i].charAt(0).toUpperCase()+sentence[i].substr(1,sentence[i].length);
    }
    return sentence.join(" ")
}
console.log(capitalize("hello world"))