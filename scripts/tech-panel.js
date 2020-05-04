const techs = {
  HTML: "fab fa-html5",
  CSS: "fab fa-css3",
  Javascript: "fab fa-js",
  PHP: "fab fa-php",
  Python: "fab fa-python",
  React: "fab fa-react",
  Node: "fab fa-node",
  Laravel: "fab fa-laravel",
  SASS: "fab fa-sass",
  GIT: "fab fa-git",
  AWS: "fab fa-aws",
  Linux: "fab fa-linux"
};

Object.keys(techs).forEach(tech => {
  $(".tech-panel").append(`
    <div class="tech-container">
      <div class="name">${tech}</div>
      <div class="logo"><i class="fa-fw ${techs[tech]}"></i></div>
    </div>
  `);
});
