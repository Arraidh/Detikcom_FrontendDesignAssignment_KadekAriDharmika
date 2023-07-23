// Function to handle smooth scrolling when clicking on navigation links
function smoothScroll(target) {
  const element = document.querySelector(target);
  const headerOffset = 50; // Adjust this value according to your header height
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollBy({
    top: offsetPosition,
    behavior: "smooth",
  });
}

// Add click event listeners to each navigation link
const navLinks = document.querySelectorAll(".nav-item a");
navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = link.getAttribute("href");
    smoothScroll(target);
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const registerBtn = document.querySelectorAll(".register-button");
const registerLink = document.getElementById("nav-item-register-btn");

registerBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    registerLink.click();
  });
});

// Set Latest Update Card
// Using the Fetch API to get data from the JSON file
const updateCardContainer = document.querySelector(".aggregator-card-list");
fetch("./data.json")
  .then((response) => response.json()) // Parse the response as JSON
  .then((data) => {
    console.log(data);
    for (item in data.update) {
      console.log(item);
      updateCardContainer.innerHTML += `
      <div class="aggregator-card">
            <div
              class="aggregator-card-image"
              id="${data.update[item].id}"
            ></div>
            <h5>
              ${data.update[item].title}
            </h5>
            <span>${data.update[item].time}</span> 
      </div>`;
      const currentCard = document.getElementById(data.update[item].id);
      currentCard.style.backgroundImage = `url('${data.update[item].image}')`;
    }
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
