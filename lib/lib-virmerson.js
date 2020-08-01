function showEle(ele) {
  let buttons = document.querySelectorAll(ele);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style = "display:block";
  }
}

function hideEle(ele) {
  let buttons = document.querySelectorAll(ele);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].style = "display:none";
  }
}
