document.querySelector(".menu-trigger").addEventListener("click", function () {
  document
    .querySelector(".menu")
    .setAttribute("style", "transform : translateX(0%)");
  document.querySelector(".search").setAttribute("style", "display: flex");
});

document.querySelector(".menu-close").addEventListener("click", function () {
  document
    .querySelector(".menu")
    .setAttribute("style", "transform : translateX(-100%)");
  document.querySelector(".search").setAttribute("style", "display: none");
});

// document.querySelector('.search').addEventListener('onchange',function () {

//   }) {

// })

// const variableA = 10
// let variableB = 20
// variableB = 1

// const root = document.querySelector('#root ol')
// let element = ''
// data.forEach(item => {
//   console.log(item)
//   element += `<li>${item}</li>`
// })
// root.innerHTML = element
// console.log(data);
