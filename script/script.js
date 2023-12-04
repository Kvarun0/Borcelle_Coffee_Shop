
//for navbar menu btn 

//for menu btn activation
let navbar=document.querySelector(".navbar");

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}

//for cart item button
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}


//for search button activation
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () =>{
    searchForm.classList.toggle('active');

    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}


window.onscroll = () =>{
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
    searchForm.classList.remove('active');
}

