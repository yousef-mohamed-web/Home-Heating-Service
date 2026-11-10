var bf = document.getElementById("bookForm");
bf.addEventListener("submit", function (e) {
  e.preventDefault();
  if (!bf.checkValidity()) {
    bf.reportValidity();
    return;
  }
  bf.hidden = true;
  document.querySelector(".fm-ok").hidden = false;
});

(function () {
  document.documentElement.classList.add("js");
  var e = document.querySelectorAll(".rv");
  if (!("IntersectionObserver" in window)) {
    e.forEach(function (x) {
      x.classList.add("in");
    });
    return;
  }
  var io = new IntersectionObserver(
    function (n) {
      n.forEach(function (x) {
        if (x.isIntersecting) {
          x.target.classList.add("in");
          io.unobserve(x.target);
        }
      });
    },
    { threshold: 0.15 },
  );
  e.forEach(function (x) {
    io.observe(x);
  });
})();

var b = document.querySelector(".burger"),
  l = document.querySelector(".links");
b.addEventListener("click", function () {
  var o = l.classList.toggle("open");
  b.setAttribute("aria-expanded", o);
});
var h = document.querySelector("header.main");
var hero = document.querySelector(".hero");
function s() {
  h.classList.toggle("scrolled", window.scrollY > 10);
  var rt = document.documentElement.dataset.theme,
    dk =
      rt === "dark" ||
      (rt !== "light" &&
        window.matchMedia("(prefers-color-scheme:dark)").matches);
  var cur = null;
  document.querySelectorAll("[data-nav]").forEach(function (x) {
    var r = x.getBoundingClientRect();
    if (r.top <= 40 && r.bottom > 40) cur = x;
  });
  h.classList.toggle("on-light", !dk && !!cur && cur.dataset.nav === "light");
}
window.addEventListener("scroll", s, { passive: true });
s();

(function () {
  var mq = window.matchMedia("(max-width:1020px)");
  document.querySelectorAll(".nv.has>a,.has-sub>a").forEach(function (a) {
    a.addEventListener("click", function (e) {
      if (a.getAttribute("href") === "#contact" && !mq.matches) return;
      e.preventDefault();
      if (mq.matches) a.parentNode.classList.toggle("sub-open");
    });
  });
})();
