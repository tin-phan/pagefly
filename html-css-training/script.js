document.addEventListener("DOMContentLoaded", function () {
  const addToCartButtons = document.querySelectorAll(".lsale, .msale");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.disabled = true;
      button.textContent = "Adding";

      setTimeout(() => {
        button.textContent = "Thank you!";
        setTimeout(() => {
          button.disabled = false;
          button.textContent = "Add To Cart";
        }, 3000);
      }, 2000);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var selectWrapper = document.querySelector(".doubly-nice-select");
  var selectCurrent = selectWrapper.querySelector(".current");
  var selectOptions = selectWrapper.querySelectorAll(".option");

  selectCurrent.addEventListener("click", function () {
    selectWrapper.classList.toggle("open");
  });

  selectOptions.forEach(function (option) {
    option.addEventListener("click", function () {
      var newCountry = option.getAttribute("data-country");
      var newCurrency = option.innerHTML.trim();

      selectCurrent.innerHTML =
        '<span class="flags ' + newCountry + '"></span> &nbsp;' + newCurrency;
      selectWrapper.classList.remove("open");
    });
  });
});
