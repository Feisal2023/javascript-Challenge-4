const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const hideModal = document.querySelector(".close");

const openModal = (e) => {
  e.preventDefault();
  modal.style.display = "block";
};
const closeModal = (e) => {
  e.preventDefault();
  modal.style.display = "none";
};

btn.addEventListener("click", openModal);
hideModal.addEventListener("click", closeModal);
