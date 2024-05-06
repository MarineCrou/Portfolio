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
    .typeString(`I'M <span class="h2-spans">Marine </span>,`)
    .typeString(
      "  <br/> A <span style='text-decoration: line-through;'> BUSINESS </span>"
    )
    .pauseFor(500)
    .deleteChars(9)
    .typeString(' FULLSTACK <span class="h2-spans"> SOFTWARE Engineer</span>.')
    .pauseFor(1000)
    .typeString(
      `<br/> 
      <a href="mailto:marine.m.crouzet@gmail.com" class="header-email" style='font-size: 20px;'
          >hire<span class="email-span">marine</span>@gmail.com</a
        >`
    )
    .start();

  // Carousel:

  const slidesContainer = document.getElementById("slides-container");
  const slide = document.querySelector(".slide");
  const prevButton = document.getElementById("slide-arrow-prev");
  const nextButton = document.getElementById("slide-arrow-next");
});
