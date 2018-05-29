function show(){
    var i, no, sum=0;
    no=document.getElementById("num").value;
    for(i=1;i<=no;i++){
        sum+=i;
    }
    document.getElementById("answer").value= sum;
}