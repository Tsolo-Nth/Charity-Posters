// Default login details
const USERNAME = "user";
const PASSWORD = "1234";

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const msg = document.getElementById("message");

  if (username === USERNAME && password === PASSWORD) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "home.html";
  } else {
    msg.textContent = "Invalid username or password!";
  }
}

function logout() {
  localStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

// Protect pages from direct access
if (!localStorage.getItem("loggedIn") && !window.location.pathname.endsWith("index.html")) {
  window.location.href = "index.html";
}

function showPhotos() {
  const area = document.getElementById("displayArea");
  area.innerHTML = `
    <h3>Charity Photos</h3>
    <img src="https://via.placeholder.com/200x150?text=Food+Donation" alt="Food Donation">
    <img src="https://via.placeholder.com/200x150?text=Children+Support" alt="Children Support">
  `;
}

function showGraphics() {
  const area = document.getElementById("displayArea");
  area.innerHTML = `
    <h3>Graphics Posters</h3>
    <img src="https://via.placeholder.com/200x150/007bff/ffffff?text=Save+The+Planet" alt="Save Planet">
    <img src="https://via.placeholder.com/200x150/ff6600/ffffff?text=Feed+The+Hungry" alt="Feed Hungry">
  `;
}
