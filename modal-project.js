
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
    backdrop.classList.remove("is-hidden");
    document.body.style.overflow = "hidden";
  }

  function closeBackdrop(backdrop) {
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


  refs.closeFormBtn.addEventListener("click", () => closeBackdrop(refs.formBackdrop));
  refs.closeThanksBtn.addEventListener("click", () => closeBackdrop(refs.thanksBackdrop));

  refs.formBackdrop.addEventListener("click", e => {
    if (e.target === refs.formBackdrop) closeBackdrop(refs.formBackdrop);
  });

  refs.thanksBackdrop.addEventListener("click", e => {
    if (e.target === refs.thanksBackdrop) closeBackdrop(refs.thanksBackdrop);
  });

  // Закриття по Escape
  window.addEventListener("keydown", e => {
    if (e.key !== "Escape") return;
    if (!refs.formBackdrop.classList.contains("is-hidden")) closeBackdrop(refs.formBackdrop);
    if (!refs.thanksBackdrop.classList.contains("is-hidden")) closeBackdrop(refs.thanksBackdrop);
  });


  refs.donateForm.addEventListener("submit", e => {
    e.preventDefault();

  

    closeBackdrop(refs.formBackdrop);
    openBackdrop(refs.thanksBackdrop);


    refs.donateForm.reset();
  });
