const refs = {
  openBtns: document.querySelectorAll("[data-modal-open]"),
  formBackdrop: document.querySelector("[data-modal-form]"),
  thanksBackdrop: document.querySelector("[data-modal-thanks]"),
  closeFormBtn: document.querySelector("[data-modal-close]"),
  closeThanksBtn: document.querySelector("[data-modal-thanks-close]"),
  modalImg: document.querySelector("[data-modal-img]"),
  donateForm: document.querySelector("#donateForm"),
};

function openBackdrop(backdrop) {
  if (!backdrop) return;
  backdrop.classList.remove("is-hidden");
  document.body.style.overflow = "hidden";
}

function closeBackdrop(backdrop) {
  if (!backdrop) return;
  backdrop.classList.add("is-hidden");
  document.body.style.overflow = "";
}

refs.openBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const imgSrc = btn.dataset.modalImg;
    if (imgSrc && refs.modalImg) refs.modalImg.src = imgSrc;
    openBackdrop(refs.formBackdrop);
  });
});

if (refs.closeFormBtn) {
  refs.closeFormBtn.addEventListener("click", () => closeBackdrop(refs.formBackdrop));
}

if (refs.closeThanksBtn) {
  refs.closeThanksBtn.addEventListener("click", () => closeBackdrop(refs.thanksBackdrop));
}

if (refs.formBackdrop) {
  refs.formBackdrop.addEventListener("click", e => {
    if (e.target === refs.formBackdrop) closeBackdrop(refs.formBackdrop);
  });
}

if (refs.thanksBackdrop) {
  refs.thanksBackdrop.addEventListener("click", e => {
    if (e.target === refs.thanksBackdrop) closeBackdrop(refs.thanksBackdrop);
  });
}

window.addEventListener("keydown", e => {
  if (e.key !== "Escape") return;

  if (refs.formBackdrop && !refs.formBackdrop.classList.contains("is-hidden")) {
    closeBackdrop(refs.formBackdrop);
  }

  if (refs.thanksBackdrop && !refs.thanksBackdrop.classList.contains("is-hidden")) {
    closeBackdrop(refs.thanksBackdrop);
  }
});

if (refs.donateForm) {
  refs.donateForm.addEventListener("submit", e => {
    e.preventDefault();

    closeBackdrop(refs.formBackdrop);
    openBackdrop(refs.thanksBackdrop);

    refs.donateForm.reset();
  });
}

const openBtns = document.querySelectorAll("[data-modal-open]");
const closeBtn = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");
const modalImg = document.querySelector(".modal-img");

// відкриття
openBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const imgSrc = btn.dataset.modalImg;
    modalImg.src = imgSrc;

    modal.classList.remove("is-hidden");
    document.body.style.overflow = "hidden";
  });
});

// закриття
closeBtn.addEventListener("click", () => {
  modal.classList.add("is-hidden");
  document.body.style.overflow = "";
});

// клік по бекдропу
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("is-hidden");
    document.body.style.overflow = "";
  }
});