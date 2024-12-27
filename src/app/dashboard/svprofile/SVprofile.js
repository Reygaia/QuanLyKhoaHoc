const sidebar = document.querySelector(".sidebar");
const menuToggle = document.querySelector(".menu-toggle");
const content = document.querySelector(".content");

localMenuToggle.addEventListener("click", () => {
      sidebar.classList.toggle("hidden");
      content.classList.toggle("hidden");
});
const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach((item) => {
      item.addEventListener("click", () => {
            menuItems.forEach((i) => i.classList.remove("active"));
            item.classList.add("active");
      });
});
const settingsIcon = document.getElementById("settings-icon");
const settingsMenu = document.getElementById("settings-menu");

settingsIcon.addEventListener("click", () => {
      settingsMenu.style.display =
            settingsMenu.style.display === "block" ? "none" : "block";
});

document.addEventListener("click", (event) => {
      if (
            !settingsIcon.contains(event.target) &&
            !settingsMenu.contains(event.target)
      ) {
            settingsMenu.style.display = "none";
      }
});
settingsIcon.addEventListener("click", () => {
      settingsMenu.classList.toggle("show");
});
// Mode
const modeBtn = document.getElementById("mode");
const body = document.body;

modeBtn.addEventListener("click", () => {
      body.classList.toggle("dark");
});
