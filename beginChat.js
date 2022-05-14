var newChat = document.querySelector(".input-chat");
function changeInput(e) {
  if(e.keyCode === 13 && newChat.value !== "") {
  const para = document.createElement("li");
  para.innerText = newChat.value;
  document.querySelector(".content-chat").insertBefore(para, document.querySelector(".content-chat").firstChild);
  newChat.value = "";
  }
}
