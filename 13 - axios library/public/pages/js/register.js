
const userNameInput = document.querySelector('#username-input');
const passwordInput = document.querySelector('#password-input');
const emailInput = document.querySelector('#email-input');

const submitBtn = document.querySelector('.submit-form-btn');

submitBtn.addEventListener('click', (event) =>{
    
    let userObject = {
        userName : userNameInput.value,
        password : passwordInput.value,
        email : emailInput.value,
    }

    axios({
        method: 'post',
        url : 'https://library-project-41a8c-default-rtdb.firebaseio.com/users.json',
        data : JSON.stringify(userObject),
    }).then(res => console.log(res))
    
})