/**
 * Navbar, scroll reveal, Netflix row controls, hero entrance,
 * mood journey scroll, cursor glow.
 */
(function () {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    const SCROLL_THRESHOLD = 48;

    function updateNav() {
      if (window.scrollY > SCROLL_THRESHOLD) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    window.addEventListener("scroll", updateNav, { passive: true });
    updateNav();
  }
})();

(function () {
  const reduce =
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const nodes = document.querySelectorAll(".reveal");
  if (!nodes.length) return;

  if (reduce) {
    nodes.forEach(function (el) {
      el.classList.add("reveal--visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal--visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -32px 0px" }
  );

  nodes.forEach(function (el) {
    observer.observe(el);
  });
})();

(function () {
  function bindRow(row) {
    var section = row.closest(".section-inner");
    if (!section) return;
    var prev = section.querySelector(".row-scroll-btn--prev");
    var next = section.querySelector(".row-scroll-btn--next");
    var step = parseInt(row.getAttribute("data-scroll-step"), 10) || 280;
    if (prev) {
      prev.addEventListener("click", function () {
        row.scrollBy({ left: -step, behavior: "smooth" });
      });
    }
    if (next) {
      next.addEventListener("click", function () {
        row.scrollBy({ left: step, behavior: "smooth" });
      });
    }
  }

  document.querySelectorAll(".netflix-scroll").forEach(bindRow);
})();

(function () {
  function readyHero() {
    var hero = document.querySelector(".hero");
    if (hero) hero.classList.add("hero--ready");
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", readyHero);
  } else {
    readyHero();
  }
})();

(function () {
  document.querySelectorAll("[data-mood-scroll]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var sel = btn.getAttribute("data-mood-scroll");
      if (!sel) return;
      var target = document.querySelector(sel);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();

(function () {
  if (
    typeof window.matchMedia === "function" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }
  if (
    typeof window.matchMedia === "function" &&
    window.matchMedia("(pointer: coarse)").matches
  ) {
    return;
  }
  var el = document.getElementById("cursorGlow");
  if (!el) return;

  var tx = window.innerWidth / 2;
  var ty = window.innerHeight / 2;
  var px = tx;
  var py = ty;

  window.addEventListener(
    "mousemove",
    function (e) {
      tx = e.clientX;
      ty = e.clientY;
    },
    { passive: true }
  );

  function tick() {
    px += (tx - px) * 0.14;
    py += (ty - py) * 0.14;
    el.style.left = px + "px";
    el.style.top = py + "px";
    requestAnimationFrame(tick);
  }
  tick();
})();
