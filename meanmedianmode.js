
const Stats=(arr)=>{
    Mean(arr);
    Median(arr);
    Mode(arr)
}
const Mean=(arr)=>{
    const mean=arr.reduce((curr,acc)=>curr+acc,0)/arr.length
    console.log("mean",mean)
}
const Median=(arr)=>{
    if(arr.length%2!=0) console.log("median",arr[arr.length/2 |0])
    else{
        let div=(arr[(arr.length/2|0 )-1] + arr[(arr.length/2 |0)])/2;
         console.log("median",div)
    }
}
const Mode=(arr)=>{
    let freq={};
    arr.forEach((val)=>{
        freq[val]=(freq[val]|| 0)+1;
    })
    const values=[]
    for(i in freq){
        values.push(freq[i])
    }
    result=[]
    const IsSame=values.every((val)=>val==values[0])
    if(!IsSame)
    {
        freq=Object.entries(freq).sort((a,b)=>{
            return b[1]-a[1];
        })
        for(let i=0;i<freq.length;i++){
            if(i==0){
                result.push(freq[i][0])
            }
            else{
                if(freq[i][1]==freq[0][1]) result.push(freq[i][0])
            }
        }
    }
    console.log("mode",result)
}
const stat1 = Stats([1, 2, 3, 4, 4, 5, 5]);
const stat2 = Stats([1, 1, 2, 2, 3, 3, 4, 4]);