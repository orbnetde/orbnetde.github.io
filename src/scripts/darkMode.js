document.addEventListener('DOMContentLoaded', () => {
  // themeSwitcher
  const themeSwitcher = document.getElementById('themeSwitcher');

  // Theme Vars
  const userTheme = localStorage.getItem('theme');
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Initial Theme Check
  const themeCheck = () => {
    if (userTheme === 'dark') {
      return document.documentElement.classList.add('dark');
    }
    if (userTheme === 'light') {
      return document.documentElement.classList.remove('dark');
    }
    if (systemTheme) {
      return document.documentElement.classList.add('dark');
    }
    document.documentElement.classList.remove('dark');
  };

// Manual Theme Switch
  const themeSwitch = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    window.scrollBy({ top: 1 });
    window.scrollBy({ top: -1 });
  };

// call theme switch on clicking buttons
  themeSwitcher?.addEventListener('click', () => {
    themeSwitch();
  });

// invoke theme check on initial load
  themeCheck();
})
;
