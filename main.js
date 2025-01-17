const hamburger = document.getElementById("hamburger")
const nav = document.querySelector("nav");
const togglerBars = document.querySelectorAll("#hamburger span");

hamburger.addEventListener('click', () => {
  togglerBars[0].classList.toggle('span1')
  togglerBars[1].classList.toggle('span2')
  togglerBars[2].classList.toggle('span3')
  nav.classList.toggle('nav-opend')
})