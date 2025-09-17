document.addEventListener("DOMContentLoaded", () => {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const landingPage = document.querySelector(".project.landing");
  const webapp = document.querySelector(".project.webapp");

  function applyFilter(filter) {
    filterBtns.forEach((btn) => btn.classList.remove("active"));
    document
      .querySelector(`[data-filter="${filter}"]`)
      ?.classList.add("active");

    if (filter === "landing") {
      landingPage.style.display = "block";
      webapp.style.display = "none";
    } else if (filter === "webapp") {
      webapp.style.display = "block";
      landingPage.style.display = "none";
    } else {
      landingPage.style.display = "block";
      webapp.style.display = "block";
    }
  }

  const urlParams = new URLSearchParams(window.location.search);
  const filter = urlParams.get("filter") || "all";
  applyFilter(filter);
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const params = btn.dataset.filter;
      applyFilter(params);
      history.pushState(null, "", `?filter=${params}`);
    });
  });
});
