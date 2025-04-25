const marquees = document.querySelectorAll('.marquee');
marquees.forEach(marquee => {
  marquee.innerHTML += marquee.innerHTML;
});