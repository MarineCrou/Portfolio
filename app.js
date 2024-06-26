document.addEventListener("DOMContentLoaded", (event) => {
  const typewriter = new Typewriter(document.getElementById("typewriter"), {
    loop: false,
    delay: 75,
  });

  typewriter
    .pauseFor(500)
    .typeString(
      `Hi <span class="h1-spans"><i class="fa-regular fa-hand"></i></span>!`
    )
    .pauseFor(500)
    .deleteChars(6)
    .typeString(`I'M <span class="h1-spans">Marine </span>, `)
    .pauseFor(500)
    .typeString('A FULLSTACK <span class="h1-spans"> SOFTWARE Engineer</span>.')
    .pauseFor(1000)
    .typeString(
      `<br/><a href="mailto:marine.m.crouzet@gmail.com" class="js-header-email"
          >Hire Me:<span class="email-span"> marine.m.crouzet@gmail.com</span></a
        >`
    )
    .start();

  const aboutTypewritter = new Typewriter(
    document.getElementById("about-me-typewriter"),
    {
      loop: false,
      delay: 75,
    }
  );
  aboutTypewritter
    .typeString(`<br/> I'm a startup founder turned software developer.`)
    .pauseFor(500)
    .start();

  // Add smooth scrolling to each nav item
  document.querySelectorAll("#nav-menu nav-scroll").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
