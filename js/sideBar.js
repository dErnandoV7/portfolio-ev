const buttonShowSideBarMob = document.querySelector(".show-side-bar-mobile");
const buttonHideSideBarMob = document.querySelector(".hide-side-bar-mobile");
const elSideBarMobile = document.querySelector(".side-bar-mobile");

buttonShowSideBarMob.addEventListener("click", (e) => {
  e.stopPropagation();

  elSideBarMobile.classList.toggle("transitionEnter");
  buttonShowSideBarMob.classList.toggle("hide");
});

buttonHideSideBarMob.addEventListener("click", (e) => {
  e.stopPropagation()

  elSideBarMobile.classList.toggle("transitionEnter");
  buttonShowSideBarMob.classList.toggle("hide");
});

document.addEventListener("click", (e) => {
  const el = e.target;
  if (!elSideBarMobile.classList.contains("transitionEnter")) return;
  if (!el.classList.contains("side-bar-mobile")) buttonHideSideBarMob.click();
});

