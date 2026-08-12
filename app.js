
document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu");
  const links = document.querySelector(".links");
  if (menu && links) {
    menu.addEventListener("click", () => {
      links.classList.toggle("mobile-open");
      links.style.display = links.classList.contains("mobile-open") ? "flex" : "";
      links.style.position = "absolute";
      links.style.top = "64px";
      links.style.left = "0";
      links.style.right = "0";
      links.style.padding = "18px 20px";
      links.style.background = "rgba(6,7,11,.97)";
      links.style.flexDirection = "column";
      links.style.borderBottom = "1px solid rgba(255,255,255,.1)";
    });
  }
});
