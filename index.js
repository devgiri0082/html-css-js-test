let select = document.querySelector(".section");
let person = document.querySelectorAll(".person");
let offset = {};
person.forEach((elem) => {
  offset[elem.id] = elem.offsetTop;
});
select.addEventListener("change", handleChange);
window.addEventListener("scroll", handleScroll, { passive: true });

function handleScroll(e) {
  for (let key in offset) {
    console.log(document.documentElement.scrollTop, offset[key]);
    if (Number(offset[key]) > document.documentElement.scrollTop) {
      select.value = key;
      return;
    }
  }
}
function handleChange(e) {
  document
    .getElementById(e.target.value)
    .scrollIntoView({ behavior: "smooth", block: "start" });
}
