const usersWrapp = document.querySelector(".users-wrap");

const editModal = document.querySelector('.modal');

const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

let userEditID;


window.addEventListener("load", (event) => {
  getAllUsers();
});

function getAllUsers() {
  axios({
    method: "get",
    url: "https://library-project-41a8c-default-rtdb.firebaseio.com/users.json",
  }).then((res) => {
    let resDatas = Object.entries(res.data);

    usersWrapp.innerHTML = "";

    resDatas.forEach((data) => {
      usersWrapp.insertAdjacentHTML(
        "beforeend",
        `
            <div class="user__box">
                            <div class="user__box_left">
                                <div class="user-status online-status"></div>
                                <img src="../../content/img/profile/banana.png" class="user-profile-box" alt="">
                                <div class="user-detail">
                                    <h1 class="user-id">${data[1].userName}</h1>
                                    <h1 class="user-email">${data[1].email}</h1>
                                </div>
                            </div>

                            <div class="user-btns-group">
                                <button class="user-info-btn" onclick='openModal("${data[0]}")'>
                                    Edit
                                </button>
                                <button class="user-follow-btn" onclick='removeUser("${data[0]}")'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g id="vuesax_linear_user-add" data-name="vuesax/linear/user-add" transform="translate(-172 -188)"><g id="user-add"><path id="Vector" d="M10,5A5,5,0,1,1,5,0,5,5,0,0,1,10,5Z" transform="translate(179 190)" fill="none" stroke="var(--white)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path id="Vector-2" data-name="Vector" d="M0,7C0,3.13,3.85,0,8.59,0a10.391,10.391,0,0,1,2.76.37" transform="translate(175.41 203)" fill="none" stroke="var(--white)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path id="Vector-3" data-name="Vector" d="M8,4a3.594,3.594,0,0,1-.12.93,3.734,3.734,0,0,1-.46,1.13A3.97,3.97,0,0,1,4,8,3.921,3.921,0,0,1,1.34,6.97a3.684,3.684,0,0,1-.76-.91A3.921,3.921,0,0,1,0,4,3.994,3.994,0,0,1,4,0,3.944,3.944,0,0,1,6.97,1.33,3.984,3.984,0,0,1,8,4Z" transform="translate(186 202)" fill="none" stroke="var(--white)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><g id="Group"><path id="Vector-4" data-name="Vector" d="M2.98,0H0" transform="translate(188.51 205.98)" fill="none" stroke="var(--white)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path><path id="Vector-5" data-name="Vector" d="M0,0V2.99" transform="translate(190 204.52)" fill="none" stroke="var(--white)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"></path></g><path id="Vector-6" data-name="Vector" d="M0,0H24V24H0Z" transform="translate(172 188)" fill="none" opacity="0"></path></g></g></svg>
                                    Remove
                                </button>
                            </div>
                        </div>
               
                        `
      );
    });
  });
}

function removeUser(userID){
    let deleted = confirm('Are Your Sure You want to Delete User ?');

    if(deleted){
      axios({
        method: "delete",
        url: `https://library-project-41a8c-default-rtdb.firebaseio.com/users/${userID}.json`
      }).then((res) => {
        console.log(res);
        usersWrapp.innerHTML = "";
          getAllUsers();
      })
    }
    
}


function clearInputs(){
  usernameInput.value = "";
  emailInput.value = "";
  passwordInput.value = "";
}

function openEditModal(){
  editModal.classList.add('show');
  editModal.style.display = 'block';
}

function closeEditModal(){
  editModal.classList.remove('show');
  editModal.style.display = 'none';
}

function openModal(userID){
  openEditModal()
  console.log(userID);
  userEditID = userID;
}
function updateUser(){
  
  let userNameInfo = {
    userName: usernameInput.value,
    email: emailInput.value,
    password: passwordInput.value
  }

  axios({
    method: "put",
    url: `https://library-project-41a8c-default-rtdb.firebaseio.com/users/${userEditID}.json`,
    data: JSON.stringify(userNameInfo)
  }).then((res) => {
    console.log(res);
    closeEditModal();
    clearInputs();
    usersWrapp.innerHTML = "";
    getAllUsers();
  })

  
}