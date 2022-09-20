let carticon=document.querySelector('#1cart,#cart2,#cart3,#cart4,#cart5')
let cart=document.querySelector('.cart')
let closecart=document.querySelector('#close-cart')

carticon.onclick=()=>{
    cart.classList.add("active");
};

closecart.onclick =() =>{
    cart.classList.remove("active");
};

if(document.readyState=='loading'){
    document.addEventListener('DOMContentLoaded',ready)
}else{
    ready();
}

function ready(){
    var removecartbuttons=document.getElementsByClassName('cart-remove')
    console.log(removecartbuttons)
    for(var i=0;i<removecartbuttons;i++){
        var button =removecartbuttons[i];
        button.addEventListener("click", removecartitem)
    }
}

function removeCartitem(event){

    var buttonClicked=event.target;
    buttonClicked.parentElement.remove();
}