const menuButton = document.querySelector("#menu");
const mobileNav = document.querySelector("#mobile-nav");

menuButton.addEventListener("click", () => {
  console.log("click");
  console.log(mobileNav.style.display);
  if (mobileNav.style.display == "") {
    mobileNav.style.display = "block";
  } else if (mobileNav.style.display == "block") {
    mobileNav.style.display = "none";
  } else {
    mobileNav.style.display = "block";
  }
});
