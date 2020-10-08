let deleteuser;
window.addEventListener("input", function (event) {
  inputChecker(event);
});
let edituser = document.querySelector(".btnedit")
let adduser = document.querySelector(".btn");
adduser.addEventListener("click", addUser);
function inputChecker(event) {
  let type = {
    text: /^[A-Za-z]{4,16}$/,
    password: /^[A-Za-z0-9\_]{4,16}$/,
    email: /^[A-Za-z]{2,20}@[A-Za-z]{1,8}\.[A-Za-z]{2,3}$/
  };
  if (type[event.target.type].test(event.target.value)) {
    console.log(type[event.target.type].test(event.target.value));
    event.target.style.border = "4px green solid";
    adduser.removeAttribute("disabled", "disabled");
  } else {
    event.target.style.border = "4px red solid";
    adduser.setAttribute("disabled", "disabled");
  }
}
let personlist = [];
function addUser() {
  let person = {
    login: document.querySelector(".login_input").value,
    password: document.querySelector(".paswword_input").value,
    email: document.querySelector(".email_input").value,
  };
  document.querySelector(".login_input").value = "";
  document.querySelector(".paswword_input").value = "";
  document.querySelector(".email_input").value = "";
  personlist.push(person);
  table.innerHTML = "";
  render(table, personlist);
}

let table = document.querySelector("#table")
function render(table, arr) {
  for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement('tr');

    let td1 = document.createElement('td');
    td1.className = "number";
    td1.innerHTML = i + 1;
    tr.appendChild(td1);
    for (let key in arr[i]) {
      let td = document.createElement('td');
      td.className = "input_list";
      td.innerHTML = arr[i][key];
      tr.appendChild(td);
    }
    let td5 = document.createElement('input');
    td5.className = "edit_list edit"
    td5.type = "button";
    td5.value = "Edit"
    let td6 = document.createElement('input');
    td6.className = "delete_list delete";
    // td5.innerHTML = "<input type='button' class='edit' value='Edit'> ";
    td5.id = "indexedit" + `${i + 1}`;
    // td6.innerHTML = "type='button' class='delete' value='Delete'>";
    td6.id = "indexdelete" + `${i + 1}`;
    td6.type = "button";
    td6.value = "Delete"

    tr.appendChild(td5);
    tr.appendChild(td6);
    table.appendChild(tr);
  }
}



table.addEventListener("click", function () {

  if (event.target.value == "Delete") {
    deleteUser();
    console.log("delete");
  } else if (event.target.value == "Edit") {
    editUser();
    console.log("edit");
  }
  else {
    event.preventDefault();
  }


})

function deleteUser() {
  console.log(event.target.id);
  let index = parseInt(event.target.id.match(/\d+/))
  console.log(index);
  personlist.splice(index - 1, 1);
  table.innerHTML = "";
  render(table, personlist);
}

function editUser() {
  console.log(event.target.id);
  let index = parseInt(event.target.id.match(/\d+/))
  console.log(index);
  document.querySelector(".login_input").value = personlist[index - 1].login;
  document.querySelector(".paswword_input").value = personlist[index - 1].password;
  document.querySelector(".email_input").value = personlist[index - 1].email;
  edituser.style.display = "block";
  adduser.style.display = "none";

  edituser.addEventListener("click", function () {
    personlist[index - 1].login = document.querySelector(".login_input").value;
    personlist[index - 1].password = document.querySelector(".paswword_input").value;
    personlist[index - 1].email = document.querySelector(".email_input").value;
    document.querySelector(".login_input").value = "";
    document.querySelector(".paswword_input").value = "";
    document.querySelector(".email_input").value = "";
    table.innerHTML = "";
    render(table, personlist);
    edituser.style.display = "none";
    adduser.style.display = "block";

  });
}