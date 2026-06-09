const nav = document.querySelector("[data-nav]");
const toggle = document.querySelector("[data-nav-toggle]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (nav && toggle) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "メニューを閉じる" : "メニューを開く");
  });

  nav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "メニューを開く");
    }
  });
}

const fileName = window.location.pathname.split("/").pop() || "index.html";
const currentPage = fileName.replace(".html", "") || "index";
document.querySelectorAll("[data-page]").forEach((link) => {
  if (link.dataset.page === currentPage) {
    link.classList.add("is-active");
    link.setAttribute("aria-current", "page");
  }
});
