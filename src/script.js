const email = document.getElementById('email1')

const button = document.getElementsByClassName('button')

const password = document.getElementById('password1')

button.addEventListener('click', () => {
    if(email.value == 'admin@admin.com' & password.value == 1234){
        alert('Login successful')
    } else{
        alert('Login failed')
    }
})