document.addEventListener("scroll", function () {
  const parallax = document.querySelector(".parallax");
  const scrollPosition = window.pageYOffset;

  parallax.style.transform = `translateY(${scrollPosition * 0.3}px)`;
});
