const elements = document.querySelectorAll(".initialize");

const observerImg = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    const el = entry.target;
    if (!entry.isIntersecting) return;
    el.style.opacity = "1";
    el.style.transform = "translateX(0px)"
    observer.unobserve(el);
  });
}, {});

elements.forEach((element) => {
  observerImg.observe(element);
});

console.log(skills)