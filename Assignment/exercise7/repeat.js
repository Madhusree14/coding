var arr=[];
var arr1=[];
for(var i=0;i<10;i++)
    arr.push(prompt("Enter the number"));
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
        arr1.push(arr[j]);
        arr.splice(j,1);}
    }
}
for(var i=0;i<arr1.length;i++){
    document.write(arr1[i]+' ')
}