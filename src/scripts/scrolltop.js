window.addEventListener('DOMContentLoaded', () => {
  const backToTop = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 100) {
      backToTop.classList.remove('opacity-0');
      return backToTop.classList.add('opacity-100');
    }
    backToTop.classList.add('opacity-0');
    return backToTop.classList.remove('opacity-100');
  });

  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById("top").scrollIntoView({behavior: "smooth"});
  });
});
