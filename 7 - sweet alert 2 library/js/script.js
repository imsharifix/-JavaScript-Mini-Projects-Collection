
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const loginBtn = document.querySelector('#login-btn');


let toast = Swal.mixin({
    toast : true,
    timer : 3000,
    timerProgressBar: true,
    showConfirmButton: false,
    position : "top-end",
    didOpen: toast => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})

username.addEventListener('blur', () =>{
    if(username.value.length < 12){
        toast.fire({
            title: "یوزرنیم کمتر از ۱۲ کاراکتر است",
            icon: "error"
        })
    }
})

password.addEventListener('blur', () =>{
    if(password.value.length < 8){
        toast.fire({
            title: "پسوورد کمتر از ۸ کاراکتر است",
            icon: "error"
        })
    }
})

loginBtn.addEventListener('click', (event) => {
    event.preventDefault()

    if(password.value.length > 8 && username.value.length > 12){
            toast.fire({
            title: "با موفقیت لاگین شدید",
            icon: "success"
        })
    }

})