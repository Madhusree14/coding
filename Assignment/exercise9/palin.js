function show(){
var no=document.getElementById("num").value;
while(no>0){
    var b1=prompt("Enter the string ");
    var b2=b1.split("").reverse().join("");
    if(b2===b1)
        alert("It is a palindrome");
    else
        alert("It is not a palindrome");
    no--;
}
}