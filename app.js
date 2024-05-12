document.addEventListener("DOMContentLoaded", (event) => {
  var typewriter = new Typewriter(document.getElementById("typewriter"), {
    loop: false,
    delay: 75,
  });

  typewriter
    .pauseFor(500)
    .typeString(`Hi 👋!`)
    .pauseFor(500)
    .deleteChars(6)
    .typeString(`I'M <span class="h1-spans">Marine </span>, `)
    .pauseFor(500)
    .typeString('A FULLSTACK <span class="h1-spans"> SOFTWARE Engineer</span>.')
    .pauseFor(1000)
    .typeString(
      `<br/> 
      <a href="mailto:marine.m.crouzet@gmail.com" class="js-header-email" style='font-size: 20px;'
          >Hire Me:<span class="email-span"> marine.m.crouzet@gmail.com</span></a
        >`
    )
    .start();

  // Carousel:

  const slidesContainer = document.getElementById("slides-container");
  const slide = document.querySelector(".slide");
  const prevButton = document.getElementById("slide-arrow-prev");
  const nextButton = document.getElementById("slide-arrow-next");
});
