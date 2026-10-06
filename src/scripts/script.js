const drawer = document.querySelector("#drawer");
const closeDrawer = document.querySelector("#close-drawer");
const btnContack = document.querySelector("#btn-contact");

btnContack.addEventListener("click", () => {
  drawer.classList.toggle("hidden");
});
closeDrawer.addEventListener("click", () => {
  drawer.classList.toggle("hidden");
});
