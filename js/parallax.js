document.addEventListener("scroll", function () {
  const parallax = document.querySelector(".parallax");
  const scrollPosition = window.pageYOffset;
  const windowHeight = window.innerHeight;

  // Calculate the background position based on the scroll position and window height
  const backgroundPosition = (scrollPosition * 0.5) - (scrollPosition / (document.body.scrollHeight - windowHeight) * 0.5 * windowHeight);

  parallax.style.transform = `translateY(${backgroundPosition}px)`;
});
