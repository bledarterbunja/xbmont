document.getElementById("phoneItem").addEventListener("click", function () {
  const phoneNumber = document.getElementById("phoneNumber").value;
  const numberToCopy = phoneNumber.replace("+", "").slice(-10);

  navigator.clipboard
    .writeText(numberToCopy)
    .then(() => {
      const tooltip = document.getElementById("tooltipText");
      tooltip.textContent = "Copied!";
      setTimeout(() => {
        tooltip.textContent = "Phone";
      }, 2000);
    })
    .catch((err) => {
      console.error("Error copying text: ", err);
    });
});

document
  .getElementById("copy-phone")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const phoneNumber = "044999999";

    navigator.clipboard
      .writeText(phoneNumber)
      .then(() => {
        const copyText = document.getElementById("copy-text");
        copyText.style.display = "none";
        const copiedText = document.createElement("span");
        copiedText.textContent = "Copied!";
        copiedText.classList.add("copied");
        document.getElementById("copy-phone").appendChild(copiedText); 
        setTimeout(() => {
          copyText.style.display = ""; 
          copiedText.remove(); 
        }, 2000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  });
const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

function showSlide(i) {
  index = (i + slides.length) % slides.length; // loop
  slider.style.transform = `translateX(-${index * 110}%)`;
}

nextBtn.addEventListener("click", () => showSlide(index + 1));
prevBtn.addEventListener("click", () => showSlide(index - 1));

// Optional: Auto-slide every 5s
// setInterval(() => showSlide(index + 1), 5000);

const viewButtons = document.querySelectorAll(".view-btn");
const popup = document.querySelector(".image-popup");
const popupImg = document.querySelector(".popup-img");
const closeBtn = document.querySelector(".close");
const feat = document.getElementById("features");

viewButtons.forEach(btn => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const currentSlide = this.closest(".slide");
    const imgSrc = currentSlide.querySelector("img").src;

    popupImg.src = imgSrc;
    popup.classList.add("active");
    feat.classList.add("features-inactive");
    document.body.style.overflow = "hidden";
  });
});

function closePopup() {
  popup.classList.remove("active");
  feat.classList.remove("features-inactive");
  document.body.style.overflow = "";
}

closeBtn.addEventListener("click", closePopup);
popup.addEventListener("click", e => {
  if (e.target === popup) closePopup();
});


//
const viewAllBtn = document.getElementById("view-all-btn");
const extraRow = document.getElementById("extra-row");

let expanded = false;

viewAllBtn.addEventListener("click", () => {
  expanded = !expanded;
  extraRow.classList.toggle("show", expanded);
  viewAllBtn.textContent = expanded ? "View Less" : "View All";
});

