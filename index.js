let alert = document.querySelector(".alert");
let btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  alert.style.display = "block";
  btn.disabled = true;
  btn.style.cursor = "not-allowed";
  
})