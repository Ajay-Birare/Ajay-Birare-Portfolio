// let menuList = document.querySelector(".right");
// let btn = document.querySelector(".menu");

// btn.addEventListener("click", () => {
//   menuList.classList.toggle("show");
// });

let menuList = document.querySelector(".right");
let btn = document.querySelector(".menu");

btn.addEventListener("click", function () {
  menuList.classList.toggle("show");
  btn.classList.toggle("menuImg");
});

// .profile .about .skills .
// .education .contact

const profile = document.querySelector(".profile");
const about = document.querySelector(".about");
const skills = document.querySelector(".skills");
const projects = document.querySelector(".projects");
const education = document.querySelector(".education");
const contact = document.querySelector(".contact");

// profile-----
profile.addEventListener("mouseover", function () {
  document.querySelector(".navbar .right a").classList.add("over");
});
profile.addEventListener("mouseleave", function () {
  document.querySelector(".navbar .right a").classList.remove("over");
});

// about------

about.addEventListener("mouseover", function () {
  document.querySelector(".navbar .right .aboutover").classList.add("over");
});
about.addEventListener("mouseleave", function () {
  document.querySelector(".navbar .right .aboutover").classList.remove("over");
});

// skill----
skills.addEventListener("mouseover", function () {
  document.querySelector(".navbar .right .skillover").classList.add("over");
});
skills.addEventListener("mouseleave", function () {
  document.querySelector(".navbar .right .skillover").classList.remove("over");
});

// projects---
projects.addEventListener("mouseover", function () {
  document.querySelector(".navbar .right .projectover").classList.add("over");
});
projects.addEventListener("mouseleave", function () {
  document
    .querySelector(".navbar .right .projectover")
    .classList.remove("over");
});

// education----
education.addEventListener("mouseover", function () {
  document.querySelector(".navbar .right .educationover").classList.add("over");
});
education.addEventListener("mouseleave", function () {
  document
    .querySelector(".navbar .right .educationover")
    .classList.remove("over");
});

// contact----

contact.addEventListener("mouseover", function () {
  document.querySelector(".navbar .right .contactover").classList.add("over");
});
contact.addEventListener("mouseleave", function () {
  document
    .querySelector(".navbar .right .contactover")
    .classList.remove("over");
});
