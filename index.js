(function () {
  const burgerButton = document.querySelector(".burger-button-open");
  const closeButton = document.querySelector(".burger-menu-close");
  const account = document.getElementById("account");
  const linkRegister = document.querySelector(".popup-bottom-link-register");
  const loginButton = document.querySelector(".header-button");
  const popup = document.querySelector(".popup-menu");
  const singInButton = document.querySelector(".popup-top-button-signin");
  const burgeMenu = document.querySelector(".burger-menu");

  burgeMenu.addEventListener("click", (event) => {
    if (event.target.classList.contains("burger-menu")) {
      document
        .querySelector(".burger-menu")
        .classList.remove("burger-menu-back");
      setTimeout(() => {
        document.getElementById("burger-menu").style.transform =
          "translate(390px)";
        document.querySelector(".burger").classList.remove("burger-active");
      }, 300);
    }
  });

  singInButton.addEventListener("click", () => {
    const emailInput = document.getElementById("E-mail");
    const passwordInput = document.getElementById("Password");
    alert(`Email: ${emailInput.value}\nPassword: ${passwordInput.value}`);
    emailInput.value = "";
    passwordInput.value = "";
  });

  burgerButton.addEventListener("click", () => {
    document.getElementById("burger-menu").style.transform = "translate(0)";
    document.querySelector(".burger").classList.add("burger-active");
    setTimeout(() => {
      document.querySelector(".burger-menu").classList.add("burger-menu-back");
    }, 300);
  });

  closeButton.addEventListener("click", () => {
    document.querySelector(".burger-menu").classList.remove("burger-menu-back");
    setTimeout(() => {
      document.getElementById("burger-menu").style.transform =
        "translate(390px)";
      document.querySelector(".burger").classList.remove("burger-active");
    }, 300);
  });

  account.addEventListener("click", () => {
    document.querySelector(".burger-menu").classList.remove("burger-menu-back");
    setTimeout(() => {
      document.getElementById("burger-menu").style.transform =
        "translate(390px)";
      document.querySelector(".burger").classList.remove("burger-active");
      document.querySelector(".popup-menu").classList.add("popup-menu-active");
    }, 300);
  });

  loginButton.addEventListener("click", () => {
    document.querySelector(".popup-menu").classList.add("popup-menu-active");
  });

  popup.addEventListener("click", (event) => {
    if (event.target.classList.contains("popup-menu")) {
      popup.classList.remove("popup-menu-active");
    }
  });

  linkRegister.addEventListener("click", () => {
    const topContent = document.querySelector(".popup-top-content");
    const forgot = document.querySelector(".popup-bottom-text-forgot");
    const linkText = document.querySelector(".popup-bottom-text-link");
    const topText = document.querySelector(".popup-top-text");
    topContent.style.display = topContent.style.display == "none" ? "" : "none";
    if (topContent.style.display == "none") {
      forgot.style.display = "none";
      topText.innerHTML = "Create account";
      linkText.innerHTML = "Already have an account?";
      linkRegister.innerHTML = "Log in";
    } else {
      forgot.style.display = "block";
      topText.innerHTML = "Log in to your account";
      linkText.innerHTML = "Don’t have an account?";
      linkRegister.innerHTML = "Register";
    }
  });

  const slider = document.querySelector(".destinations-images");
  const arrowRigth = document.querySelector(
    ".destinations-mobile-arrow-rigth-img"
  );
  const arrowLeft = document.querySelector(
    ".destinations-mobile-arrow-left-img"
  );
  const circles = document.querySelectorAll(".toggle-circle");
  const arrows = document.querySelectorAll(".mobile-arrow");

  let position = 1;

  const showArrow = (current) => {
    for (let i = 0; i < arrows.length; i++) {
      arrows[i].classList.remove("arrow-brigth");
    }
    if (current === 0) {
      arrowLeft.classList.add("arrow-brigth");
    } else if (current === 2) {
      arrowRigth.classList.add("arrow-brigth");
    }
  };

  const showCircle = (current) => {
    for (let i = 0; i < circles.length; i++) {
      circles[i].classList.remove("bright");
    }
    circles[current].classList.add("bright");
  };

  showCircle(position);
  showArrow(position);

  const moveRigth = (current) => {
    if (current === 2) {
      slider.style.transform = "translateX(0%)";
      position = 1;
    } else if (current === 1) {
      slider.style.transform = "translateX(33.5%)";
      position = 0;
    }
  };
  const moveLeft = (current) => {
    if (current === 0) {
      slider.style.transform = "translateX(0%)";
      position = 1;
    } else if (current === 1) {
      slider.style.transform = "translateX(-33.5%)";
      position = 2;
    }
  };

  slider.addEventListener("click", (event) => {
    if (event.target.classList.contains("item-1")) {
      moveRigth(position);
    } else if (event.target.classList.contains("item-2")) {
      if (position === 2) {
        moveRigth(position);
      } else if (position === 0) {
        moveLeft(position);
      }
    } else if (event.target.classList.contains("item-3")) {
      moveLeft(position);
    }
    showCircle(position);
  });

  arrowRigth.addEventListener("click", () => {
    moveLeft(position);
    showCircle(position);
    showArrow(position);
  });

  arrowLeft.addEventListener("click", () => {
    moveRigth(position);
    showCircle(position);
    showArrow(position);
  });
})();
