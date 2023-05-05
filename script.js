let create = document.querySelector('button');
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
create.addEventListener("click",()=>{
    let username = document.getElementById('username')
    let password = document.getElementById('password')
    let confirmpassword = document.getElementById('confirm')
    let email = document.getElementById('email')
    if(username.value.length < 5){
        username.classList.add('error');
        username.nextElementSibling.classList.add('show')
    }else{
        username.classList.remove('error');
        username.nextElementSibling.classList.remove('show')
    }
    if(!email.value.match(validRegex)){
        email.classList.add('error');
        email.nextElementSibling.classList.add('show')
    }else{
        email.classList.remove('error');
        email.nextElementSibling.classList.remove('show')
    }
    
    if(password.value =="" ||password.value.length < 8 || password.value.length > 15 ){
        password.classList.add('error');
        password.nextElementSibling.classList.add('show')
    }else{
        password.classList.remove('error');
        password.nextElementSibling.classList.remove('show')
    }
    
    if(confirmpassword.value != password.value ){
        confirmpassword.classList.add('error');
        confirmpassword.nextElementSibling.classList.add('show')
    }else{
        confirmpassword.classList.remove('error');
        confirmpassword.nextElementSibling.classList.remove('show')
    }
})