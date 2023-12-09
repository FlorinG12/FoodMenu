const btns = document.querySelectorAll("[data-target]");
const close_btns = document.querySelectorAll(".modal-btn");
const overlay = document.querySelector("#overlay");

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.add("active");
    overlay.classList.add("active");
  });
});

close_btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(btn.dataset.target).classList.remove("active");
    overlay.classList.remove("active");
  });
});

window.onclick = (e) => {
  if (e.target == overlay) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => modal.classList.remove("active"));
    overlay.classList.remove("active");
  }
};

function sortAndDisplay(category) {
  // Get elements with the specified category
  var elements = document.querySelectorAll("." + category);

  // Convert the NodeList to an array for sorting
  var elementsArray = Array.from(elements);

  // Sort the array alphabetically based on text content
  elementsArray.sort(function (a, b) {
    return a.textContent.localeCompare(b.textContent);
  });

  // Clear the existing content
  document.body.innerHTML = "";

  // Append the sorted elements back to the document
  elementsArray.forEach(function (element) {
    document.body.appendChild(element);
  });
}
