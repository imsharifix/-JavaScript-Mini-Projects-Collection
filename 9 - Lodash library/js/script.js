const todoInput = document.querySelector("#todo-input");
const ulContainer = document.querySelector("#all-list");

const addNewTodo = function (inputValue) {
  let newItemList = document.createElement("li");
  newItemList.classList.add("item-list");

  let newSpan = document.createElement("span");
  newSpan.innerHTML = inputValue;

  let newTrashIcon = document.createElement("i");
  newTrashIcon.className = "fa fa-trash-o delete trashBin";

  newItemList.append(newSpan, newTrashIcon);
  ulContainer.append(newItemList);
  todoInput.value = "";
};

todoInput.addEventListener("keyup", (event) => {
  if (event.keyCode === 13) {
    let inputValue = event.target.value;
    let newInputValue = _.lowerCase(inputValue);

    addNewTodo(newInputValue);
  }
});


window.addEventListener("load", (event) => {
  todoInput.focus();

  let numbers = [1, 2, 33, 24, 55, 636, 454];
  console.log(numbers);
  let pullNums = _.pull(numbers, 33, 636, 454);
  console.log(pullNums);

  console.log(_.random(6, 17));
  

});
