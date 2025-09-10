// Simple JavaScript for demo
document.addEventListener("DOMContentLoaded", () => {
  console.log("OshSU MOOC frontend loaded!");

  const heroButton = document.querySelector(".hero button");
  if (heroButton) {
    heroButton.addEventListener("click", () => {
      alert("Welcome to OshSU MOOC Platform!");
    });
  }
});
