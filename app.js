




const formHide1= document.querySelector('.form1');
const nameInput = document.querySelector('.username');
const emailInput = document.querySelector('.email');
const phoneInput = document.querySelector('#phone');
const regiterBtn = document.querySelector('#btnReg');
const loginBtn = document.querySelector('#btnLog');
const passInput = document.querySelector('.pass');

const logpassInput = document.querySelector('.passLog');
const lognameInput = document.querySelector('.usernameLog');


regiterBtn.addEventListener('click', function(){

    const name= nameInput.value;
    const email = emailInput.value;
    const phone = phoneInput.value;
    const passsword = passInput.value;
    
    if (name === '' || email ==='' || phone ==='' || passsword==='') {
        alert('Please fill all fields');
       
    }

    else {

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('pass', passsword);

    formHide1.style.display = "none";

}
});

loginBtn.addEventListener('click', function () {

    const checkName = localStorage.getItem('name');
    const checkpass = localStorage.getItem('pass');

    const name= lognameInput.value;
    const passsword =logpassInput.value;

    if (name=== checkName && passsword=== checkpass) {
        window.location.replace("./dashboard.html", "_blank" );
    }
    else alert("something wrong");
    
});
 


