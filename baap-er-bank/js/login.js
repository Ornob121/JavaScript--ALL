document.getElementById('btn-submit').addEventListener('click', function () {

    const email = document.getElementById('your-email');
    const mail = email.value;

    const pass = document.getElementById('your-pass');
    const password = pass.value;

    if (mail === 'salman@khan.com' && password === 'vaijaan') {
        window.location.href = 'bank.html';
    }
    else {
        alert('Put the correct email and than try again')
    }

})


