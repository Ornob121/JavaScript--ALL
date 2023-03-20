function getInputValue(fieldId) {
  const fieldValue = document.getElementById(fieldId).value;
  return fieldValue;
}

document.getElementById("name-send-btn").addEventListener("click", function () {
  const nameField = getInputValue("name-field");
  if (!nameField) {
    return alert("Please Fill The Form");
  }
  localStorage.setItem("name", nameField);
  document.getElementById('name-field').value = "";
});

document
  .getElementById("email-send-btn")
  .addEventListener("click", function () {
    const emailField = getInputValue("email-field");
    if (!emailField) {
      return alert("Please Fill The Form");
    }
    localStorage.setItem("email", emailField);
    document.getElementById('email-field').value = "";
  });

document
  .getElementById("message-send-btn")
  .addEventListener("click", function () {
    const messageField = getInputValue("message-field");
    if (!messageField) {
      return alert("Please Fill The Form");
    }
    localStorage.setItem("message", messageField);
    document.getElementById('message-field').value = "";
  });

function removeItemFromLocalStorage(field, keyName) {
  const fieldValue = document.getElementById(field);
  fieldValue.value = "";
  localStorage.removeItem(keyName);
}

document
  .getElementById("name-delete-btn")
  .addEventListener("click", function () {
    removeItemFromLocalStorage("name-field", "name");
  });

document
  .getElementById("email-delete-btn")
  .addEventListener("click", function () {
    removeItemFromLocalStorage("email-field", "email");
  });

document
  .getElementById("message-delete-btn")
  .addEventListener("click", function () {
    removeItemFromLocalStorage("message-field", "message");
  });

document.getElementById("reset-btn").addEventListener("click", function () {
  localStorage.clear();
});


function localStorageObject (){
    let allInfo = {}
    const allInfoInLocalStorage = localStorage.getItem('allInfo');
    if(allInfoInLocalStorage){
        allInfo = JSON.parse(allInfoInLocalStorage);
    }
    return allInfo;
}


document.getElementById('all-send-btn').addEventListener('click', function(){
    const nameField = getInputValue('name-field')
    const emailField = getInputValue('email-field')
    const messageField = getInputValue('message-field')
    if(!nameField || !emailField || !messageField){
        return alert('Please fill all the field')
    };
    setInLocalStorage(nameField, emailField, messageField)
    document.getElementById('name-field').value = ""
    document.getElementById('email-field').value = "";
    document.getElementById('message-field').value = ""
})

const setInLocalStorage = (nameField, emailField, messageField) =>{
  const allInfo = localStorageObject();
    allInfo.name = nameField;
    allInfo.email = emailField;
    allInfo.message = messageField;
    localStorage.setItem('allInfo', JSON.stringify(allInfo))
}