function toggleLogin() {
  document.getElementById("loginPanel").classList.toggle("hidden");
}

function login() {
  const id = document.getElementById("adminId").value;
  const pass = document.getElementById("adminPass").value;
  const message = document.getElementById("loginMessage");

  if (id === "admin" && pass === "Tushar@123") {
    message.textContent = "Login successful. Admin access granted.";
    message.style.color = "green";
    enableEditing();
  } else {
    message.textContent = "Invalid credentials.";
    message.style.color = "red";
  }
}

function enableEditing() {
  document.querySelectorAll("[contenteditable]").forEach(el => {
    el.setAttribute("contenteditable", "true");
  });
}

document.getElementById("themeSelector").addEventListener("change", function () {
  const theme = this.value;
  localStorage.setItem("theme", theme);
  applyTheme();
});

document.getElementById("bgColorPicker").addEventListener("input", function () {
  const color = this.value;
  localStorage.setItem("bgColor", color);
  document.body.style.background = color;
});

function applyTheme() {
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.body.style.color = "#eee";
    document.body.style.background = "#222";
  } else if (theme === "light") {
    document.body.style.color = "#333";
    document.body.style.background = localStorage.getItem("bgColor") || "lightgreen";
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.body.style.color = prefersDark ? "#eee" : "#333";
    document.body.style.background = prefersDark ? "#222" : (localStorage.getItem("bgColor") || "lightgreen");
  }
}

window.onload = applyTheme;
