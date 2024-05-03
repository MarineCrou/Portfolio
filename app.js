document.addEventListener("DOMContentLoaded", (event) => {
  var typewriter = new Typewriter(document.getElementById("typewriter"), {
    loop: false,
    delay: 75,
  });

  typewriter
    .pauseFor(1000)
    .typeString(`I'M <span class="h2-spans">Marine </span> 👋,`)
    .pauseFor(1000)
    .typeString(
      "  <br/> A <span style='text-decoration: line-through;'> BUSINESS DEVELOPER </span>"
    )
    .pauseFor(500)
    .deleteChars(20)
    .typeString(' FULLSTACK <span class="h2-spans"> SOFTWARE Engineer</span>.')
    .pauseFor(1000)
    .typeString(
      `<br/> 
      <a href="mailto:marine.m.crouzet@gmail.com" class="header-email" style='font-size: 20px;'
          >hire<span class="email-span">marine</span>@gmail.com</a
        >`
    )
    .start();
});
