async function loadPartial(selector, file, callback) {
  const res = await fetch(`./partials/${file}`);
  if (!res.ok) throw new Error(`Failed to fetch ${file}`);
  const html = await res.text();
  document.querySelector(selector).outerHTML = html;
  if (callback) callback();
}

document.addEventListener("DOMContentLoaded", () => {
  loadPartial("#header", "header.html", () => {
    const pcNav = document.querySelector("#pc-nav");
    const mobileNav = document.querySelector("#mobile-nav");
    // Copy from PC Nav to Mobile Nav
    if (pcNav && mobileNav) {
      mobileNav.innerHTML = pcNav.innerHTML;
    }
  });
  loadPartial("#footer", "footer.html");
});
