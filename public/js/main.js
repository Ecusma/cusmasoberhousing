// public/js/main.js


// The following snippet is designed to try and protect the contact phone number from being absolutely spammed by bots etc.
document.querySelectorAll(".phone").forEach(el => {
  const number = `(${el.dataset.user}) ${el.dataset.mid}-${el.dataset.end}`;
  el.innerHTML = `<a href="tel:+1${el.dataset.user}${el.dataset.mid}${el.dataset.end}">${number}</a>`;
});

// The next bit is for the modals, ie the photo galleries:

function openModal(galleryItem) {
  const modal = document.getElementById("photoModal");
  const modalImg = document.getElementById("modalImg");
  const img = galleryItem.querySelector("img");

  if (!modal || !modalImg || !img) return;

  modal.classList.add("active");
  modalImg.src = img.src;
  modalImg.alt = img.alt || "";
}

function closeModal() {
  const modal = document.getElementById("photoModal");
  if (!modal) return;
  modal.classList.remove("active");
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});

window.openModal = openModal;
window.closeModal = closeModal;