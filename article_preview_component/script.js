const ele_btn = document.getElementById("btn");
const ele_popup = document.getElementById("popup");
const ele_author_info = document.getElementById("author_details");
const ele_author = document.getElementById("author");
const relatedTarget = "popup";
let is_btn_active = false;
let lastWidth = window.innerWidth;

function closePopUp() {
  ele_popup.classList.toggle("hidden", true);
}
function openPopUp() {
  ele_popup.classList.toggle("hidden", false);
}
function toggleActive() {
  ele_author.classList.toggle("active");
}
function handleResponsive() {
  let width = window.innerWidth;
  lastWidth = width;
}

function fadeIn() {
  openPopUp();
}
function fadeOut(e) {
  if (e.relatedTarget.id === relatedTarget) {
    return;
  }
  closePopUp();
}
function btnClick(e) {
  if (e.target.closest("#popup")) {
    return;
  }
  ele_popup.classList.toggle("hidden", is_btn_active);
  toggleActive();
  if (lastWidth < 768) {
    ele_author_info.className = is_btn_active ? "show" : "hidden";
  }
  is_btn_active = !is_btn_active;
}
function btnOut(e) {
  if (!e.target.closest("#btn") && is_btn_active) {
    closePopUp();
    toggleActive();

    if (lastWidth < 768) {
      ele_author_info.className = is_btn_active ? "show" : "hidden";
    }
    is_btn_active = !is_btn_active;
  }
}

document.addEventListener("click", btnOut);
ele_btn.addEventListener("click", btnClick);

ele_btn.addEventListener("mouseenter", fadeIn);
ele_btn.addEventListener("mouseleave", fadeOut);
ele_popup.addEventListener("mouseleave", closePopUp);

window.addEventListener("resize", handleResponsive);
