$(".header-button").on("click", () => {
  $(".projects")[0].scrollIntoView({ behavior: "smooth" });
  $(".projects-mobile")[0].scrollIntoView({ behavior: "smooth" });
});

$(".contact-copyright").append(new Date().getFullYear().toString());
