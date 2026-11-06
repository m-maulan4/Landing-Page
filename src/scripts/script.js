const drawer = document.querySelector("#drawer");
const closeDrawer = document.querySelector("#close-drawer");
const btnContact = document.querySelector("#btn-contact");
let lastFocus = null;

function openDrawer() {
  drawer.classList.remove("hidden");
  btnContact.setAttribute("aria-expanded", "true");
  lastFocus = document.activeElement;
  closeDrawer.focus();
}

function closeDrawerFn() {
  drawer.classList.add("hidden");
  btnContact.setAttribute("aria-expanded", "false");
  lastFocus?.focus();
}

btnContact.addEventListener("click", openDrawer);
closeDrawer.addEventListener("click", closeDrawerFn);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !drawer.classList.contains("hidden")) {
    closeDrawerFn();
  }
});

drawer.addEventListener("keydown", (e) => {
  if (e.key !== "Tab") return;
  const focusable = drawer.querySelectorAll('a[href], button:not([disabled])');
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
});