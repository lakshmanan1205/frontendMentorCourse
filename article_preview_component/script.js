const ele_btn = document.getElementById("btn");
const ele_popup = document.getElementById("popup");
const ele_author_info = document.getElementById("author_details");
const ele_author = document.getElementById("author");

let is_btn_active = false;
let lastWidth = window.innerWidth;

function btnClick(e) {
  if (e.target.closest("#popup")) {
    return;
  }
  ele_popup.className = is_btn_active ? "hidden" : "show";
  ele_author.classList.toggle("active");
  if (lastWidth < 768) {
    ele_author_info.className = is_btn_active ? "show" : "hidden";
  }
  is_btn_active = !is_btn_active;
}
function btnOut(e) {
  if (!e.target.closest("#btn") && is_btn_active) {
    ele_popup.className = "hidden";
    is_btn_active = !is_btn_active;
  }
}
function handleResponsive() {
  let width = window.innerWidth;
  lastWidth = width;
}

document.addEventListener("click", btnOut);
ele_btn.addEventListener("click", btnClick);
window.addEventListener("resize", handleResponsive);
