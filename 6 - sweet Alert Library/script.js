
const userName = document.querySelector('.userName');
const password = document.querySelector('.password');
const loginBtn = document.querySelector('.login-btn');
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('click', (event) =>{
    event.preventDefault()
})

loginBtn.addEventListener('click', () => {
    let userNameInput = userName.value;
    let passwordInput = password.value;
    
    if(userNameInput.length  < 8 || passwordInput.length  < 12 || userNameInput === "" || passwordInput === ""){
        swal({
            title : "اطلاعات وارد شده نا معتبر میباشد!",
            text: "لطفا یوزرنیم بالای ۸ کاراکتر و پسورد بالای ۱۲ کاراکتر باشد",
            icon : "error"
        })
    }else{
            swal({
            title : "خوش آمدید با موفقیت وارد شدید ",
            icon : "success",
            time: "3000",
        })
    }
})