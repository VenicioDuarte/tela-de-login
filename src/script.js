const email = document.getElementById('email1');
const buttons = document.getElementsByClassName('button');
const password = document.getElementById('password1');

buttons[0].addEventListener('click', function() {
    if(email.value === 'admin@admin.com' && password.value === '1234'){
        alert('Login successful');
    } else {
        alert('Login failed');
    }
});
