const chunk=(arr,size)=>{
    const newarr=[];
    let length=arr.length;
    let index=0;
    while(index+size<length){
        newarr.push(arr.slice(index,index+size))
        index+=size;
    }
    if(length-index>0){
        newarr.push(arr.slice(index,length))
    }
    return newarr;
}
console.log(chunk([1, 2, 3, 4], 2))


//For loop

const chunks=(arr,size)=>{
    let newarr=[];
    let len=arr.length;
    let i;
    for(i=0;i+size<len;i++){ //
            newarr.push(arr.slice(i,i+size));
            i+=size-1
    } 
    if(len-i>0){
        console.log("came")
        newarr.push(arr.slice(i,len))
    }
    return newarr;
}

console.log(chunks(arr=[1,2,3,4,5,6],8))