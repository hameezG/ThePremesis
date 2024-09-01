
const popup = document.getElementById('pop-up');
const registerClose = document.getElementById('btn-reg-home');
const close = document.getElementById('close-btn');
const popReg = document.getElementById('reg-btn');

registerClose.addEventListener('click' , function(){
    popup.style.display='block';
    
    close.addEventListener('click' , function(){
        popup.style.display='none';

        
    });
});





