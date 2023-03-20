document.getElementById('submit-btn').addEventListener('click', function(){
    const inputEmail = document.getElementById('input-email');
    const userEmail = inputEmail.value;
    
    const inputPassword = document.getElementById('input-password');
    const userPassword = inputPassword.value;

    if(userEmail === 'hello@gmail.com' && userPassword === '120660'){
        window.location.href = 'bank.html'
    }
    else{
        alert('Please input correct email and password')
    }

})