function show(){
    var i=2,mul,count=0;
    no=document.getElementById("num").value;
    for(i=1;i<=no;i++){
        mul=i*i;
        if(mul<=no){
            count++;
        }
    }
    document.getElementById("answer").value= count;
}