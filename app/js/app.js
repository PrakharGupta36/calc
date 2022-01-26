let radioButton = document.getElementsByClassName("radio-button");

for (let i = 0; i < radioButton.length; i++) {
  setInterval(() => {
    if (radioButton[i].checked === true) {
      document.body.className = radioButton[i].value;
    }
  }, 500);
}


