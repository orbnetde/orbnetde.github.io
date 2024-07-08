document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('header');

  window.onscroll = function() {
    const sticky = header.offsetTop;

    if ((window.scrollY - 2) > sticky) {
      header.classList.add('sticky-header');
    } else {
      header.classList.remove('sticky-header');
    }
  };
  window.scrollBy({ top: 1 });
  window.scrollBy({ top: -1 });
});
