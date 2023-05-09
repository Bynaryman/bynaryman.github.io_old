document.addEventListener("scroll", function () {
  const parallax = document.querySelector(".parallax");
  const scrollPosition = window.pageYOffset;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.scrollHeight;

  // Calculate the background position based on the scroll position, window height, and document height
  const backgroundPosition = (scrollPosition / (documentHeight - windowHeight)) * (windowHeight * 0.5);

  parallax.style.transform = `translateY(${backgroundPosition}px)`;
});
