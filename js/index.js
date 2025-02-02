// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: {
    name: "pepperoni",
    price: 1,
  },
  mushrooms: {
    name: "Mushrooms",
    price: 1,
  },
  greenPeppers: {
    name: "Green Peppers",
    price: 1,
  },
  whiteSauce: {
    name: "White sauce",
    price: 3,
  },
  glutenFreeCrust: {
    name: "Gluten-free crust",
    price: 5,
  },
};
// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};
// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();
  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll(".pep").forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  document.querySelectorAll(".mushroom").forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = "visible";
    } else {
      oneMushroom.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`

  document.querySelectorAll(".green-pepper").forEach((greenPepper) => {
    if (state.greenPeppers) {
      greenPepper.style.visibility = "visible";
    } else {
      greenPepper.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  var sauces = document.querySelector(".sauce");
  if (state.whiteSauce) {
    sauces.classList.add("sauce-white");
  } else {
    sauces.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  var crusts = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    crusts.classList.add("crust-gluten-free");
  } else {
    crusts.classList.remove("crust-gluten-free");
  }
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let pepe = document.querySelector(".btn.btn-pepperoni");
  let mush = document.querySelector(".btn.btn-mushrooms");
  let greenPep = document.querySelector(".btn.btn-green-peppers");
  let whiteSau = document.querySelector(".btn.btn-sauce");
  let glutenCrust = document.querySelector(".btn.btn-crust");

  if (state.pepperoni) {
    pepe.classList.remove("active");
  } else {
    pepe.classList.add("active");
  }

  if (state.mushrooms) {
    mush.classList.remove("active");
  } else {
    mush.classList.add("active");
  }

  if (state.greenPeppers) {
    greenPep.classList.remove("active");
  } else {
    greenPep.classList.add("active");
  }

  if (state.whiteSauce) {
    whiteSau.classList.remove("active");
  } else {
    whiteSau.classList.add("active");
  }

  if (state.glutenFreeCrust) {
    glutenCrust.classList.remove("active");
  } else {
    glutenCrust.classList.add("active");
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let select = document.querySelectorAll(".panel.price ul li");

  if (state.pepperoni) {
    select[0].style.textDecoration = "";
  } else {
    select[0].style.textDecoration = "line-through";
  }

  if (state.mushrooms) {
    select[1].style.textDecoration = "";
  } else {
    select[1].style.textDecoration = "line-through";
  }

  if (state.greenPeppers) {
    select[2].style.textDecoration = "";
  } else {
    select[2].style.textDecoration = "line-through";
  }

  if (state.whiteSauce) {
    select[3].style.textDecoration = "";
  } else {
    select[3].style.textDecoration = "line-through";
  }

  if (state.glutenFreeCrust) {
    select[4].style.textDecoration = "";
  } else {
    select[4].style.textDecoration = "line-through";
  }
}
renderEverything();
// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", () => {
  state.pepperoni = !state.pepperoni;
  renderEverything();
});
// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`

document.querySelector(".btn.btn-mushrooms").addEventListener("click", () => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector(".btn.btn-green-peppers")
  .addEventListener("click", () => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything();
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", () => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});
// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", () => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
