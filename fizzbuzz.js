// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
    
const fizzbuzz=(end)=>{
    let c=0,d=0;
    let conc='';
    for(let i=1;i<=end;i++){
        conc='';
        ++c;
        ++d;
        if(c==3){
            conc="fizz "
            c=0;
        }
        if(d==5){
            conc+="buzz";
            d=0;
        }
        if(conc!='')
            {
                console.log(conc);
                conc=''
            }
        else{
            console.log(i);
        }
    }
}
fizzbuzz(20)