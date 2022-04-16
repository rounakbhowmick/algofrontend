var countPrimes = function(n) {
    if(n<2) return 0;
 let listedarr=new Array(n).fill(1);
    for(let i=2;i<n;i++){
        if(listedarr[i]){
            for(let j=i*i;j<n;j+=i){
                listedarr[j]=0;
            }
        }
    }
    return listedarr.reduce((a,b)=>a+b) -2;
}