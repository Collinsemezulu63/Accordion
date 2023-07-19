let acc = document.getElementsByClassName("accordion");
for (let index = 0; index < acc.length; index++) {
  acc[index].onclick = function () {
    this.classList.toggle("active");
    this.nextElementSibling.classList.toggle("show");
  };
}
