const menuButton = document.querySelector("#menu");
const mobileNav = document.querySelector("#mobile-nav");
const closeButton = document.querySelector("  #close-button");

menuButton.addEventListener("click", (event) => {
  event.stopPropagation();
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
closeButton.addEventListener("click", (event) => {
  event.stopPropagation();
  mobileNav.style.display = "none";
});

document.addEventListener("click", (event) => {
  if (!mobileNav.contains(event.target)) {
    mobileNav.style.display = "none";
    console.log("reache here");
  }
});
