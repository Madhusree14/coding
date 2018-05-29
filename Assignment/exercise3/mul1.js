function show(){
    var i, no, sum=0;
    no=document.getElementById("num").value;
    for(i=1;i<no;i++){
        if(i%3==0 || i%5==0){
            sum+=i;
        }
    }
    document.getElementById("answer").value= sum;
}