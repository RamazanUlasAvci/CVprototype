(function (){
  const root=document.documentElement;
  const key='theme';
  const btn=document.getElementById('theme-toggle');

  //To use saved theme or system preferance
  const prefersDark =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const saved=localStorage.getItem(key);
  const initial=saved || (prefersDark ?'dark':'light');
  root.setAttribute('data-theme', initial);

  function setPressed() {
    if (btn) btn.setAttribute('aria-pressed', String(root.dataset.theme === 'dark'));
  }
  setPressed();

  if (btn){
    btn.addEventListener('click', function () {
      const next=root.dataset.theme==='dark'?'light':'dark';
      root.setAttribute('data-theme',next);
      localStorage.setItem(key,next);
      setPressed();
    });
  }
})();
