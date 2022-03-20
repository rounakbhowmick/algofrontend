const maxChar=(str)=>{
    const freq={}
    for(i of str){
        freq[i]=(freq[i] || 0)+1
    }
    const sortedFreq=Object.entries(freq).sort((a,b)=>{
        return b[1]-a[1];
    })
    return sortedFreq[0][0];
}

