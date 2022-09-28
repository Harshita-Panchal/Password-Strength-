function toggle() {
  let pass = document.getElementById("password");
  let eye = document.getElementById("toggle");

  if (password.getAttribute("type") == "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
}

var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");

let alphabet = /[a-zA-Z]/;
let number = /[0-9]/;
let schr = /[!,@,#,$,%,^,&,*,(,),+,=,-,~]/;

pass.addEventListener("input", () => {
  if (pass.value.length > 0) {
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
  }

  let val = pass.value;
  if (val.match(alphabet) || val.match(number) || val.match(schr)) {
    str.innerHTML = "weak";
    msg.style.color = "red";
  }
  if (
    val.match(alphabet) &&
    val.match(number) &&
    val.match(schr) &&
    val.length >= 6
  ) {
    str.innerHTML = "medium";
    msg.style.color = "yellow";
  }
  if (
    val.match(alphabet) &&
    val.match(number) &&
    val.match(schr) &&
    val.length >= 8
  ) {
    str.innerHTML = "strong";
    msg.style.color = "green";
  }
});
