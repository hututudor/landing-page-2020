const projects = [
  {
    title: "react-language-support",
    image: "react-language-support.png",
    description: "An easy to use multi-language support library for React",
    links: {
      demo: "http://react-language-support.tudorhutu.ro",
      github: "https://github.com/hututudor/react-language-support"
    }
  },
  {
    title: "My personal blog",
    image: "blog.png",
    description: "My personal blog built with Laravel",
    links: {
      demo: "http://blog.tudorhutu.ro"
    }
  },
  {
    title: "Notebook",
    image: "notebook.png",
    description: "Note-taking app built with NodeJS and React",
    links: {
      demo: "http://notebook.tudorhutu.ro",
      github: "https://github.com/hututudor/notebook"
    }
  },
  {
    title: "eLab",
    image: "elab.png",
    description: "Project management platform built with AWS AppSync and React",
    links: {
      demo: "http://elab.tudorhutu.ro"
    }
  }
];

let currentIndex = 0;
let isAnimating = false;

const projectScreen = $(".project-screen");
const projectNavigation = $(".project-navigation");

const showProject = index => {
  currentIndex = index;
  const project = projects[index];

  $(".project-screen-title").html(project.title);
  $(".project-screen-description").html(project.description);
  $(".project-screen-image").css(
    "background-image",
    `url(./images/projects/${project.image})`
  );

  if (project.links.github) {
    $(".project-screen-link-github").css("display", "block");
  } else {
    $(".project-screen-link-github").css("display", "none");
  }

  if (project.links.demo) {
    $(".project-screen-link-demo").css("display", "block");
  } else {
    $(".project-screen-link-demo").css("display", "none");
  }
};

$(".project-screen-link-github").on("click", () => {
  window.open(projects[currentIndex].links.github, "_blank");
});

$(".project-screen-link-demo").on("click", () => {
  window.open(projects[currentIndex].links.demo, "_blank");
});

$(".project-slider-left").on("click", () => {
  if (currentIndex - 1 < 0) {
    animate(projects.length - 1);
  } else {
    animate(currentIndex - 1);
  }
});

$(".project-slider-right").on("click", () => {
  if (currentIndex + 1 > projects.length - 1) {
    animate(0);
  } else {
    animate(currentIndex + 1);
  }
});

const animate = index => {
  if (isAnimating || index === currentIndex) return;

  isAnimating = true;
  projectScreen.addClass("hidden");

  const point = $(".point");
  point.eq(currentIndex).removeClass("active");
  point.eq(index).addClass("active");

  setTimeout(() => {
    showProject(index);
    projectScreen.removeClass("hidden");
    setTimeout(() => {
      isAnimating = false;
    }, 400);
  }, 400);
};

showProject(0);

for (let i = 0; i < projects.length; i++) {
  projectNavigation.append(
    i === 0 ? '<div class="point active"></div>' : '<div class="point"></div>'
  );

  $(".point")
    .eq(i)
    .on("click", () => animate(i));
}
