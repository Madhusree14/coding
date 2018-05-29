function show()
{
 var no,a,b;
 no=document.getElementById("num").value;
 var arr=[];
 var result=[];
 for(var i=0;i<5;i++)
 {
 arr.push(prompt("enter the numbers"));
 }
 var a;
 var b;
 for(var i=0;i<arr.length;i++)
 {
 a=arr[i];
 for(var j=0;j<arr.length;j++)
 {
 b=arr[j];
 if(parseInt(a)+parseInt(b)==no)
 {
 result.push(a+","+b);
 }
 }
 }
 
 for(var i=0;i<result.length;i++)
 {
 document.write(result[i]+" ");
 }
}