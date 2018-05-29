function show(){
    var i, no, fact;
    fact=1;
    no=document.getElementById("num").value;
        if(no<0){
            alert('invalid');
        }
        else{
            for(i=1; i<=no; i++)  
            {
            fact= fact*i;
             }
             alert(fact);
    }  
    
    }
