$(".header-button").on("click", () => {
  console.log("t4st");
  $(".projects")[0].scrollIntoView({ behavior: "smooth" });
});

$(".contact-copyright").append(new Date().getFullYear().toString());
