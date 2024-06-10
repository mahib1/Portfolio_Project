document.addEventListener("DOMContentLoaded", function() {
  const text = "Hello World!";
  const speed = 100;  // Adjust typing speed in milliseconds
  let i = 0;

  function typeWriter() {
    if (i < text.length) {
      document.getElementById("typewriter").innerHTML += text.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  typeWriter();
});
