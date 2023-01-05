let string="";

let digit=document.querySelectorAll('.digit_child');
Array.from(digit).forEach((items)=>{
    items.addEventListener('click',(idx)=>{
        
        if(idx.target.innerHTML == '='){
            string=eval(string);
            document.querySelector('#input').value=string;
        }
        else if(idx.target.innerHTML == 'Reset'){
            string="";
            document.querySelector('#input').value=string;
        }
        else if(idx.target.innerHTML == 'C'){
            string=string.slice(0,-1);
            document.querySelector('#input').value=string;
        }
       else{
           string+=idx.target.innerHTML;
           document.querySelector('#input').value=string;
       } 
    })
})