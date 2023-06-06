function toggleMode() {
  var container = document.getElementById("container");
  container.classList.toggle("dark-mode");

  var isDarkMode = container.classList.contains("dark-mode");

  var dark_backgroundColor = "#1e202a";
  var dark_textColor = "#ffffff";
  var dark_headerSubtitle = "#8b97c6";
  var dark_cardColor = "#252a41";
  var dark_cardHover = "#333a55";
  var dark_toggleBG = "linear-gradient(to right, #378fe6, #3eda82)";

  var light_backgroundColor = "#ffffff";
  var light_textColor = "#1e202a";
  var light_headerSubtitle = "#63687e";
  var light_cardColor = "#f0f2fa";
  var light_cardHover = "#e1e3f0";
  var light_toggleBG = "#aeb3cb";

  if (isDarkMode) {
    document.documentElement.style.setProperty("--background-color", dark_backgroundColor);
    document.documentElement.style.setProperty("--text-color", dark_textColor);
    document.documentElement.style.setProperty("--header-subtitle", dark_headerSubtitle);
    document.documentElement.style.setProperty("--card-color", dark_cardColor);
    document.documentElement.style.setProperty("--card-hover", dark_cardHover);
    document.documentElement.style.setProperty("--toggle-bg", dark_toggleBG);
  } else {
    //switch back to light mode
    document.documentElement.style.setProperty("--background-color", light_backgroundColor);
    document.documentElement.style.setProperty("--text-color", light_textColor);
    document.documentElement.style.setProperty("--header-subtitle", light_headerSubtitle);
    document.documentElement.style.setProperty("--card-color", light_cardColor);
    document.documentElement.style.setProperty("--card-hover", light_cardHover);
    document.documentElement.style.setProperty("--toggle-bg", light_toggleBG);
  }
}

var darkMode = document.getElementById("dark");
var lightMode = document.getElementById("light");

darkMode.addEventListener("click", function () {
  toggleMode();
  console.log("Dark Mode clicked!");
});

lightMode.addEventListener("click", function () {
  toggleMode();
  console.log("Light Mode clicked!");
});
