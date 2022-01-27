function theme() {
  let radioButton = document.querySelectorAll(".radio-button");

  radioButton.forEach((e) => {
    setInterval(() => {
      if (e.checked === true) {
        document.body.className = e.value;
      }
    });
  });
}

theme();

function main() {
  let input = document.getElementById("input");
  let numButtons = document.querySelectorAll(".num-button");
  let deleteButton = document.getElementById("delete-button");
  let opertors = document.querySelectorAll(".opertors");
  let equal = document.getElementById("equal");
  let reset = document.getElementById("reset");

  numButtons.forEach((e) => {
    e.addEventListener("click", () => {
      input.value += e.value;
    });
  });

  deleteButton.onclick = () => {
    let inputValue = input.value.slice(0, -1);
    input.value = inputValue;
  };

  reset.onclick = () => {
    input.value = "";
  };

  opertors.forEach((e) => {
    e.addEventListener("click", () => {
      if (input.value.length > 0) {
        input.value += e.value;
      }
    });
  });

  equal.onclick = () => {
    try {
      input.value = eval(input.value);
    } catch (error) {
      if (error instanceof SyntaxError) {
        input.value = "";
        alert("Cannot evaluate");
      }
    }
  };
}

main();
