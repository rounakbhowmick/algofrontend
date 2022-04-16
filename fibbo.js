var fib = function(n) {
    let arr=[0,1];
    if(n<1)
        return 0;
    for(let i=2;i<=n;i++){
        arr.push(arr[i-1]+arr[i-2])
    }
    return arr[arr.length-1];
};

//memo fibbo

var fib = function(n) {
    const memo={}
    for(let i=0;i<=n;i++){
        if(i<2) memo[i] = i;
        else{
            memo[i]=memo[i-2]+memo[i-1];
        }
    }
    return memo[n]
};