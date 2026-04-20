// public/js/main.js


// The following snippet is designed to try and protect the contact phone number from being absolutely spammed by bots etc.
document.querySelectorAll(".phone").forEach(el => {
  const number = `(${el.dataset.user}) ${el.dataset.mid}-${el.dataset.end}`;
  el.innerHTML = `<a href="tel:+1${el.dataset.user}${el.dataset.mid}${el.dataset.end}">${number}</a>`;
});