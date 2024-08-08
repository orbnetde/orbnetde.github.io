const safeRun = (fn) => {
  try {
    return fn();
  } catch (e) {

  }
};

const ls = {
  set: (key, value) => safeRun(() => localStorage.setItem(key, value)),
  get: (key) => safeRun(() => localStorage.getItem(key)) || '',
};

const enableAnalytics = () => {
  document.querySelectorAll('[data-category=\'analytics\']').forEach(item => {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.dataset.ccitem = 'true';
    if (item.dataset?.src) {
      s.src = item.dataset.src;
      document.head.appendChild(s);
      return true;
    }

    s.innerHTML = item.innerHTML;
    document.head.appendChild(s);
  });
};

const disableAnalytics = () => {
  document.querySelectorAll('[data-ccitem=\'true\']').forEach(item => item.remove());
};

document.addEventListener('DOMContentLoaded', () => {
  const cb = document.getElementById('cookie-banner');

  cb.querySelector('#cb-deny')?.addEventListener('click', () => {
    ls.set('cookie-consent', 'deny');
    disableAnalytics();
    return cb.classList.add('hidden');
  });
  cb.querySelector('#cb-accept')?.addEventListener('click', () => {
    ls.set('cookie-consent', 'accept');
    enableAnalytics();
    return cb.classList.add('hidden');
  });
  document.querySelector('#cb-show')?.addEventListener('click', () => {
    return cb.classList.remove('hidden');
  });

  const consent = ls.get('cookie-consent');
  if (consent === '') {
    return cb.classList.remove('hidden');
  }
  if (consent === 'accept') {
    enableAnalytics();
  }
});
