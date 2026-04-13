// simple fade-in animation
document.addEventListener("DOMContentLoaded", function () {
  const left = document.querySelector(".left");

  left.style.opacity = 0;
  left.style.transform = "translateY(20px)";

  setTimeout(() => {
    left.style.transition = "all 0.8s ease";
    left.style.opacity = 1;
    left.style.transform = "translateY(0)";
  }, 200);
});