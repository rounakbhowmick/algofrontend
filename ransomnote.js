    
const magazine =
 "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
 
 const ransomNote=(note,magazine)=>{
     let magazinefreq={};
     magazine=magazine.split(" ");
     note=note.split(" ");
     magazine.forEach((val)=>{
         magazinefreq[val]=(magazinefreq[val] || 0) + 1;
     })
     let boolean=true;
    note.forEach((val)=>{
        if(!magazinefreq.hasOwnProperty(val) || magazinefreq[val]==0){
            boolean=false;
        }
        else{
            magazinefreq[val]=magazinefreq[val]-1;
        }
    })
    if(!boolean) return false;
    return true;
 }
 console.log(ransomNote("sit ad est love", magazine));