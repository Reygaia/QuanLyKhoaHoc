// src/app/dashboard/svprojectRegister/SVProjectRegister.ts

// Get HTML elements
const sidebar = document.querySelector<HTMLElement>(".sidebar");
const menuToggle = document.querySelector<HTMLElement>(".menu-toggle");
const content = document.querySelector<HTMLElement>(".content");
const menuItems = document.querySelectorAll<HTMLElement>(".menu-item");
const settingsIconElement = document.getElementById("settings-icon");
const settingsMenuElement = document.getElementById("settings-menu");
const modeBtn = document.getElementById("mode");
const body = document.body as HTMLBodyElement;

// Add event listeners
menuToggle?.addEventListener("click", () => {
      sidebar?.classList.toggle("hidden");
      content?.classList.toggle("hidden");
});

menuItems.forEach((item) => {
      item.addEventListener("click", () => {
            menuItems.forEach((i) => i.classList.remove("active"));
            item.classList.add("active");
      });
});

settingsIcon.addEventListener("click", () => {
      if (settingsMenuElement === null) {
            return;
      }

      if (settingsMenuElement.style.display === "block") {
            settingsMenuElement.style.display = "none";
      } else {
            settingsMenuElement.style.display = "block";
      }
});

document.addEventListener("click", (event) => {
      if (
            settingsIconElement !== null &&
            settingsMenuElement !== null &&
            event.target !== null &&
            !settingsIconElement.contains(event.target as Node) &&
            !settingsMenuElement.contains(event.target as Node)
      ) {
            settingsMenuElement.style.display = "none";
      }
});

settingsIcon?.addEventListener("click", () => {
      settingsMenu?.classList.toggle("show");
});

modeBtn?.addEventListener("click", () => {
      body.classList.toggle("dark");
});

// Firework class
class Firework {
      private x: number;
      private y: number;
      private colors: string[];
      private size: number;
      private speedX: number;
      private speedY: number;
      private opacity: number;
      private life: number;

      constructor(x: number, y: number, colors: string[]) {
            this.x = x;
            this.y = y;
            this.colors = colors;
            this.size = Math.random() * 3 + 2;
            this.speedX = (Math.random() - 0.5) * 6;
            this.speedY = (Math.random() - 0.5) * 6;
            this.opacity = 1;
            this.life = 0;
      }

      update(): void {
            // Update firework logic here
      }

      draw(): void {
            // Draw firework logic here
      }
}

// Fireworks array
const fireworks: Firework[] = [];

// Launch fireworks function
function launchFireworks(): void {
      // Launch fireworks logic here
}

// Animate fireworks function
function animateFireworks(): void {
      // Animate fireworks logic here
}

// Call launchFireworks function when submit button is clicked
document.getElementById("submit-btn")?.addEventListener("click", () => {
      // Check information (or add other conditions here)
      const successMessage: HTMLElement | null =
            document.getElementById("successMessage");
      // ...
});
