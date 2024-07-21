document.querySelector(".jsbtn").addEventListener("click", function () {
  const progress = document.querySelector(".jsemail").value;
  const length = progress.length;
  if (!length) {
    alert("Enter a Email");
  } else {
    alert(`Confirm Email : ${document.querySelector(".jsemail").value}`);
    console.log();
  }
});
/*
document.querySelector(".btn").addEventListener("click", function () {
  if (!length) {
    alert("Enter a Email");
  }
});
*/
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btncloseModal = document.querySelector(".close-modal");
const btnsshowModal = document.querySelectorAll(".show-modal");

const showModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsshowModal.length; i++) {
  btnsshowModal[i].addEventListener("click", showModal);
}

btncloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  //   console.log(e);
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
