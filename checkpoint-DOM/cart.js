
function buttonplus() {
    let plus=document.getElementById("add");
    plus.nextElementSibling.innerHTML++;
    somme();
}
function buttonminus() {
    let minus=document.getElementById("substract");
    if(minus.previousElementSibling.innerHTML>0){
        minus.previousElementSibling.innerHTML--;
    }
    
    somme();
}
function buttonremove(){
    let rmv=document.getElementById("remove");
    var myobj = document.getElementById("cart1");
myobj.remove();
somme();
}
function somme(){
    let quantity = document.getElementsByClassName("nbr");
    let price = document.getElementsByClassName("prix");
    let sum=0;
    for(let i=0 ; i < price.length; i++){
  
        sum+= quantity[i].innerHTML*price[i].innerHTML;
    }
   return(document.getElementById("totalprice").innerHTML = sum);
    

}